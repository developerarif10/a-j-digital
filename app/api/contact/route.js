import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, subject, service, message } = await request.json()

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'your-email@example.com', // Where you want to receive leads
      subject: `New Inquiry: ${subject || 'No Subject'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Service Interest: ${service}
        
        Message:
        ${message}
      `,
    }

    // Send mail
    // await transporter.sendMail(mailOptions) // Uncomment when Env vars are set

    // Simulate delay for UX
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })

  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}