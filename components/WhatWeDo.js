"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import SelectionLabel from './SelectionLabel'

const services = [
  {
    id: 1,
    title: "Branding & Identity",
    description: "We craft bold, memorable brand identities that tell your story and leave a lasting impression. From logos to full brand guidelines, we ensure consistency and impact across all touchpoints.",
    timeline: "2 - 4 weeks"
  },
  {
    id: 2,
    title: "Web Design & Development",
    description: "We build pixel-perfect, high-performance websites using modern technologies like Next.js and React. Our websites are designed to convert, with a focus on speed, accessibility, and SEO.",
    timeline: "3 - 6 weeks"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centric design that looks beautiful and functions seamlessly. We create intuitive interfaces and engaging user experiences that keep your customers coming back.",
    timeline: "2 - 5 weeks"
  },
  {
    id: 4,
    title: "Motion & Visual Design",
    description: "Bring your digital presence to life with captivating motion graphics and visual storytelling. We create dynamic assets that enhance engagement and communicate complex ideas simply.",
    timeline: "1 - 3 weeks"
  }
]


// ... imports

export default function WhatWeDo() {
  const [activeId, setActiveId] = useState(1)

  return (
    <section id="what-we-do" className="transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        

        {/* Header - Redesigned V2: Label - Title - Description */}
        <div className="flex flex-col md:grid md:grid-cols-3 items-start md:items-center gap-8 mb-8 pb-8">
          {/* Left: Services Label */}
          <div className="flex items-center gap-2 justify-self-start">
            <SelectionLabel text="Services" />
          </div>
          
          {/* Center: Title */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] justify-self-start">
            <span className="">What we </span>
            <span className="text-zinc-400 dark:text-zinc-600">offer.</span>
          </h2>
            
          {/* Right: Description */}
          <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg max-w-sm leading-relaxed md:text-right justify-self-end">
             We specialize in creating bold, high-impact digital experiences that set brands apart.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
          
          {/* Left Column: Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                className="relative cursor-pointer group"
              >
                <div className={`relative z-10 px-8 py-8 flex items-center gap-6 rounded-2xl transition-colors duration-500 ${
                  activeId === service.id 
                    ? 'text-black dark:text-white' 
                    : 'text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-zinc-300'
                }`}>
                  {/* Active Background Pill */}
                  {activeId === service.id && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-2xl"
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}

                  <span className={`relative z-10 text-lg font-medium font-mono ${activeId === service.id ? 'text-zinc-600 dark:text-zinc-400' : ''}`}>
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <h3 className="relative z-10 text-2xl md:text-3xl font-medium tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Details Card (Sticky on Desktop) */}
          <div className="lg:h-[600px] lg:sticky lg:top-32">
             <div className="relative h-full">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeId}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.3 }}
                   className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-10 md:p-12 flex flex-col justify-between h-[400px] md:h-[500px]"
                 >
                   <div>
                     <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                       {services.find(s => s.id === activeId)?.description}
                     </p>
                   </div>
                   
                   <div>
                     <div className="h-px w-full bg-zinc-300 dark:bg-zinc-800 mb-6"></div>
                     <div className="flex justify-between items-center text-sm font-medium">
                       <span className="text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">Timeline</span>
                       <span className="text-black dark:text-white">{services.find(s => s.id === activeId)?.timeline}</span>
                     </div>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
