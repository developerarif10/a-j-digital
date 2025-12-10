"use client"
import SelectionLabel from '@/components/SelectionLabel'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
    _gotcha: "", // Honeypot field
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const validateForm = () => {
    let newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = "Name is required"
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setStatus("idle")
      return
    }

    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to send")

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
        _gotcha: "",
      })
      setErrors({})
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section className="min-h-screen flex mt-10 md:mt-0 items-center justify-center py-20 md:py-32 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* LEFT COLUMN - Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <SelectionLabel text="Contact us" />
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mt-4">
                Get in <span className="text-zinc-500 dark:text-zinc-500">Touch.</span>
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
                We know every project is unique, and you might have some questions before getting started.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                 <a href="mailto:arifur.rahman@std.cu.ac.bd" className="text-3xl md:text-4xl font-medium  hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors block">
                   arifur.rahman@std.cu.ac.bd
                 </a>
                 <p className="text-xl font-medium ">+880 1580-307819</p>
              </div>

              <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>

              <div className="space-y-1">
                <p className="font-bold">Address:</p>
                <p>Chittagong, Bangladesh</p>
              </div>

              <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
              
              <div className="flex gap-6 text-lg font-medium ">
                <Link href="https://facebook.com/odommodigital" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Facebook</Link>
                <Link href="https://www.linkedin.com/company/odommodigital/" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">LinkedIn</Link>
               
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Form */}
          <div className="bg-zinc-100/80 dark:bg-zinc-900 rounded-xl p-8 md:p-12 transition-colors duration-300">
             {status === "success" ? (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-center py-20"
               >
                  <div className="flex items-center gap-2 mb-4"><h3 className="text-2xl font-bold  mb-2">Message Sent! <Image src="/images/tick_icon.webp" alt="checked" width={50} height={50} className="inline-block" /></h3></div>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">We'll get back to you shortly.</p>
                  <button onClick={() => setStatus("idle")} className=" font-bold hover:underline">Send another</button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot Field - Hidden */}
                  <input 
                    type="text" 
                    name="_gotcha" 
                    value={formData._gotcha} 
                    onChange={handleChange} 
                    style={{ display: "none" }} 
                    tabIndex={-1} 
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Name*</label>
                      <input 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border ${errors.name ? 'border-red-500' : 'border-0'} text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 outline-none transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Phone</label>
                      <input 
                        name="phone" 
                        type="tel"
                        value={formData.phone} 
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border-0 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Email*</label>
                    <input 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border ${errors.email ? 'border-red-500' : 'border-0'} text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 outline-none transition-all`}
                      placeholder="contact@example.com"
                    />
                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Service Interest</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border-0 text-zinc-900 dark:text-white focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 outline-none transition-all appearance-none"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Video Editor">Video Editor</option>
                        <option value="Branding">Branding</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Subject</label>
                      <input 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border-0 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 outline-none transition-all"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Message*</label>
                    <textarea 
                      name="message" 
                      rows="6" 
                      value={formData.message} 
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border ${errors.message ? 'border-red-500' : 'border-0'} text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 outline-none transition-all resize-none`}
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                  )}

                  <button 
                     type="submit" 
                     disabled={status === "loading"}
                     className="w-full py-4 bg-primary text-white rounded-xl font-medium text-lg cursor-pointer transition-colors disabled:opacity-50 mt-4 hover:bg-primary/90"
                  >
                     {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
               </form>
             )}
          </div>

        </div>
      </div>
    </section>
  )
}
