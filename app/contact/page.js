"use client"
import SelectionLabel from '@/components/SelectionLabel'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  })

  // Add the phone field to state as per design
  const [phone, setPhone] = useState("")

  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, phone }),
      })

      if (!res.ok) throw new Error("Failed to send")

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        service: "",
        message: "",
      })
      setPhone("")
    } catch (err) {
      setStatus("error")
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
                 <a href="mailto:hello@odommodigital.com" className="text-3xl md:text-4xl font-medium  hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors block">
                   hello@odommodigital.com
                 </a>
                 <p className="text-xl font-medium ">(123) 456-7890</p>
              </div>

              <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>

              <div className="space-y-1">
                <p className="font-bold">Address:</p>
                <p>123 Street, Metropolis, State, ZIP</p>
              </div>

              <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
              
              <div className="flex gap-6 text-lg font-medium ">
                <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Twitter/x</a>
                <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Youtube</a>
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
                  <h3 className="text-2xl font-bold  mb-2">Message Sent!</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">We'll get back to you shortly.</p>
                  <button onClick={() => setStatus("idle")} className=" font-bold hover:underline">Send another</button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Name*</label>
                    <input 
                      name="name" required value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border-0 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Email*</label>
                    <input 
                      name="email" type="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border-0 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 outline-none transition-all"
                      placeholder="contact@gmail.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Message*</label>
                    <textarea 
                      name="message" required rows="6" value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border-0 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-600 outline-none transition-all resize-none"
                      placeholder="Project inquiry..."
                    ></textarea>
                  </div>

                  <button 
                     type="submit" 
                     disabled={status === "loading"}
                     className="w-full py-4 bg-primary text-white rounded-xl font-medium text-lg cursor-pointer transition-colors disabled:opacity-50 mt-4"
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
