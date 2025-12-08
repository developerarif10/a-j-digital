"use client"
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Subtle Background Spotlights - blending with header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-accent-violet/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Pill Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-border text-sm font-medium text-secondary-foreground mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary fill-primary/20" />
            <span>Your Digital Growth Partner</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter text-foreground mb-8 leading-[1.1]"
          >
            Transform Your Business Into a <span className="text-primary">Digital Powerhouse</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Fast, stunning, and conversion-focused websites for entrepreneurs and businesses ready to grow. We handle the design, development, and strategy—you focus on what you do best.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-2 bg-primary text-white rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
            >
              Start Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-2 bg-background border border-border text-foreground rounded-full font-bold text-lg hover:bg-secondary/10 transition-all flex items-center justify-center"
            >
              Let's Talk
            </Link>
          </motion.div>

        </div>
      </div>
      
      
    </section>
  )
}
