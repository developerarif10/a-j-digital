"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from './mycomponent/Button'
import RightArrow from './mycomponent/RightArrow'

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'What we Do', href: '#what-we-do' },
  { name: 'How we Help', href: '#how-we-help' },
  { name: 'About', href: '/about' },
  { name: 'Process', href: '#process' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header 
      className={`fixed z-50 transition-all duration-300 left-1/2 -translate-x-1/2 ${
        scrolled 
          ? 'w-[95%] top-4 rounded-xl bg-background/80 backdrop-blur-3xl border border-white/10 shadow-lg py-3' 
          : 'w-full top-0 bg-background py-5 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 z-50 group">
          <span className="font-bold text-xl tracking-widest uppercase text-foreground group-hover:opacity-80 transition-opacity">
            Odommo Dig.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all hover:after:w-full pb-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-foreground hover:bg-secondary/20 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Button 
            href="/contact" 
            className="px-6 py-2.5 font-bold text-sm"
             bgColor="bg-transparent"
            borderColor="hover:border-primary"
            slideHoverColor="bg-primary"
            hoverTextColor="hover:text-black dark:hover:text-white"
            icon={<RightArrow  />}
          >
            Start building
          </Button>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-foreground"
          >
            {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="text-foreground relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
             <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "100vh",
              transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } 
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { duration: 0.3, delay: 0.1, ease: [0.32, 0.72, 0, 1] }  
            }}
            className="fixed inset-0 bg-background z-40 overflow-hidden flex flex-col pt-32 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.1 + index * 0.1, duration: 0.4, ease: "easeOut" }
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -20,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Link 
                    href={link.href}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-foreground/80 hover:text-primary transition-colors block py-2 border-b border-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.6, duration: 0.4 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-8"
                  onClick={() => setIsOpen(false)}
              >
                  <Button
                    href="/contact" 
                    className="w-full justify-between py-6 text-lg"
                    bgColor="bg-foreground"
                    textColor="text-background"
                    hoverBgColor="hover:opacity-90"
                    icon={<RightArrow />}
                  >
                    Start building
                  </Button>
              </motion.div>
            </nav>
            
             {/* Decorative Elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1, transition: { delay: 0.5, duration: 1 } }}
              exit={{ opacity: 0 }}
              className="absolute bottom-10 left-6 text-[120px] font-bold leading-none pointer-events-none select-none"
            >
              ODOMMO
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
