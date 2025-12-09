"use client"
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

export default function ProjectCard({ project }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Store rect to avoid recalculation on every mouse move
  const rectRef = useRef(null)

  // Motion values for mouse tracking
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for smooth following - "Snappy" config
  const springConfig = { stiffness: 500, damping: 30, mass: 0.2 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseEnter = (e) => {
    setIsHovered(true)
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect()
    }
  }

  const handleMouseMove = (e) => {
    if (!rectRef.current) return
    
    // Calculate mouse position relative to center of card
    const mouseX = e.clientX - rectRef.current.left - rectRef.current.width / 2
    const mouseY = e.clientY - rectRef.current.top - rectRef.current.height / 2
    
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    // Don't reset position on leave, so it fades out where it was
  }

  return (
    <Link 
      href={`/portfolio/${project.slug}`} 
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group block relative w-full h-[500px] rounded-xl overflow-hidden cursor-none"
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
      </div>

      {/* Mouse Following Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <motion.div 
          style={{ x: xSpring, y: ySpring }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            scale: isHovered ? 1 : 0.8 
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 shadow-xl will-change-transform"
        >
          <span className="font-semibold text-sm">View Case Study</span>
          <ArrowUpRight size={18} />
        </motion.div>
      </div>

      {/* Content at Bottom */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end h-full pointer-events-none">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base line-clamp-2 mb-4 max-w-[90%]">
            {project.content}
          </p>
          <div className="inline-block border border-white/30 rounded-full px-4 py-1.5 text-white/90 text-sm backdrop-blur-sm">
            {project.category}
          </div>
        </div>
      </div>
    </Link>
  )
}