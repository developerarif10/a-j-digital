"use client"
import { motion } from 'framer-motion'
import SelectionLabel from './SelectionLabel'
import Button from './mycomponent/Button'
import { Highlight } from './mycomponent/HIghlight'
import RightArrow from './mycomponent/RightArrow'

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
            className="inline-flex items-center gap-2 px-4 text-sm font-medium mb-8"
          ><SelectionLabel text="Your Digital Growth Partner" />
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter text-foreground mb-8 leading-[1.1]"
          >
            Transform Your Business Into a <br/> <Highlight className="text-black dark:text-white">
         Digital Powerhouse
        </Highlight>
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
            <Button 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-2 font-bold text-lg shadow-lg shadow-primary/25 border-primary"
              bgColor="bg-primary"
              textColor="text-white"
              slideHoverColor="bg-primary/90"
              hoverBgColor=""
          icon={<RightArrow width={16} height={16} />}
            >
              Start Project
            </Button>
            <Button 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-2 font-bold text-lg"
              bgColor="bg-background"
              textColor="text-foreground"
              borderColor="border-border hover:border-primary"
              slideHoverColor="bg-primary"
              hoverTextColor="hover:text-black dark:hover:text-white"
            >
              Let's Talk
            </Button>
          </motion.div>

        </div>
      </div>
      
      
    </section>
  )
}
