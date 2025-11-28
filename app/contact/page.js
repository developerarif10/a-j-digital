"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: 'Web Development',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', service: 'Web Development', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Let's work together</h1>
        <p className="text-secondary">Have a project in mind? Fill out the form below.</p>
      </div>

      <div className="bg-surface p-8 md:p-12 rounded-3xl border border-muted shadow-lg">
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-secondary">I'll get back to you within 24-48 hours.</p>
            <button onClick={() => setStatus('idle')} className="mt-6 text-accent-teal font-medium hover:underline">
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-primary" htmlFor="name">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-muted focus:border-accent-violet focus:ring-1 focus:ring-accent-violet outline-none transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-primary" htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-muted focus:border-accent-violet focus:ring-1 focus:ring-accent-violet outline-none transition-all"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-primary" htmlFor="service">Interested Service</label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-muted focus:border-accent-violet focus:ring-1 focus:ring-accent-violet outline-none transition-all"
              >
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Technical Strategy</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-primary" htmlFor="subject">Subject</label>
              <input
                required
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-muted focus:border-accent-violet focus:ring-1 focus:ring-accent-violet outline-none transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-primary" htmlFor="message">Message</label>
              <textarea
                required
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-background border border-muted focus:border-accent-violet focus:ring-1 focus:ring-accent-violet outline-none transition-all"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-accent-teal hover:text-primary transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'error' && (
              <p className="text-red-500 text-center text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}