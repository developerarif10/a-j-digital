"use client"
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
  { name: 'About', href: '#about' },
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
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-background z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-medium text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4" onClick={() => setIsOpen(false)}>
           <Button
            href="/contact" 
            className="px-6 py-2.5 font-bold text-sm"
            bgColor="bg-foreground"
            textColor="text-background"
            hoverBgColor="hover:opacity-90"
            icon={<RightArrow />}
          >
            Start building
          </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
