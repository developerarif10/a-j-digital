import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, subject, service, message, phone, _gotcha } = await request.json()

    // Honeypot check (Bot detection)
    if (_gotcha) {
      // Silently fail for bots - return passed status but don't send email
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,          // Gmail SSL port
      secure: true,       // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      subject: `New Message: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
          <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; font-weight: bold;">Message:</p>
            <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
          </div>
        </div>
      `,
    }

    // Send mail
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 })
  }
}
