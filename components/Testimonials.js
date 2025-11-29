'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
    IoHardwareChip,
    IoLogoElectron,
    IoLogoVenmo,
    IoLogoVercel,
    IoPlanet,
    IoPrism
} from "react-icons/io5";
import { RiDoubleQuotesL } from 'react-icons/ri';

const testimonials = [
  {
    id: 1,
    companyName: 'Velocity',
    companyIcon: <IoLogoElectron />,
    quote: 'They tailor their solutions to our specific needs and goals, creating a truly bespoke experience.',
    author: { name: 'Denis Slavska', role: 'CTO, Ailitic', location: 'New York, NY' },
    gradient: 'from-blue-600/20 via-cyan-500/20 to-transparent',
    borderHover: 'group-hover:border-cyan-500/30'
  },
  {
    id: 2,
    companyName: 'Vortex',
    companyIcon: <IoPlanet />,
    quote: 'They organized their work and internal management was outstanding. A benchmark for efficiency.',
    author: { name: 'Jahan Melad', role: 'PM, Buildwave', location: 'Austin, TX' },
    gradient: 'from-orange-600/20 via-amber-500/20 to-transparent',
    borderHover: 'group-hover:border-orange-500/30'
  },
  {
    id: 3,
    companyName: 'Synergy',
    companyIcon: <IoLogoVenmo />,
    quote: 'Working with them was a great experience. The ROI we saw within the first month was incredible.',
    author: { name: 'Jim Halpert', role: 'Lead Eng, InHive', location: 'San Francisco, CA' },
    gradient: 'from-emerald-600/20 via-teal-500/20 to-transparent',
    borderHover: 'group-hover:border-emerald-500/30'
  },
  {
    id: 4,
    companyName: 'NextGen',
    companyIcon: <IoLogoVercel />,
    quote: 'The level of attention to detail and engineering excellence they brought to the table was unmatched.',
    author: { name: 'Sarah Connors', role: 'VP, Skynet', location: 'Los Angeles, CA' },
    gradient: 'from-purple-600/20 via-pink-500/20 to-transparent',
    borderHover: 'group-hover:border-purple-500/30'
  },
  {
    id: 5,
    companyName: 'Quantum',
    companyIcon: <IoPrism />,
    quote: 'We scaled our infrastructure by 300% without a single minute of downtime thanks to their roadmap.',
    author: { name: 'David Kim', role: 'Director, Q-Labs', location: 'Seoul, KR' },
    gradient: 'from-indigo-600/20 via-violet-500/20 to-transparent',
    borderHover: 'group-hover:border-indigo-500/30'
  },
  {
    id: 6,
    companyName: 'Cyberdyne',
    companyIcon: <IoHardwareChip />,
    quote: 'Absolute professionals. They did not just write code; they solved complex business problems.',
    author: { name: 'Miles Dyson', role: 'CEO, Cyberdyne', location: 'Chicago, IL' },
    gradient: 'from-rose-600/20 via-red-500/20 to-transparent',
    borderHover: 'group-hover:border-rose-500/30'
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const TestimonialSection = () => {
  const scrollContainerRef = useRef(null);
  // Use Framer Motion hook to check if the section is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative w-full bg-[#050505] py-24 text-white overflow-hidden font-sans">
      
      {/* --- Ambient Background Animation --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue Orb */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
            x: [0, 50, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl mix-blend-screen"
        />
        {/* Purple Orb */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.15, 0.3],
            x: [0, -30, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -right-20 w-[30rem] h-[30rem] bg-purple-900/10 rounded-full blur-3xl mix-blend-screen"
        />
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.span 
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : {}}
                className="h-px bg-blue-500"
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl leading-tight">
              Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Trust</span>
            </h2>
          </motion.div>
          
          {/* --- Navigation Buttons --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex gap-4 sm:mt-0"
          >
            <NavButton onClick={() => scroll('left')} icon={<FiChevronLeft />} label="Previous" />
            <NavButton onClick={() => scroll('right')} icon={<FiChevronRight />} label="Next" />
          </motion.div>
        </div>

        {/* --- Carousel Container --- */}
        <motion.div 
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`group relative flex-shrink-0 w-[85vw] sm:w-[420px] snap-center flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/5 p-8 sm:p-10 transition-colors duration-500 ${item.borderHover}`}
            >
              
              {/* Hover Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100`}
              />
              
              {/* Content Layer */}
              <div className="relative z-10 flex h-full flex-col">
                
                {/* Top: Icon Pill */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-md shadow-lg shadow-black/20">
                    <span className="text-lg text-white">{item.companyIcon}</span>
                    <span className="text-sm font-medium text-white/90">{item.companyName}</span>
                  </div>
                  <RiDoubleQuotesL className="text-5xl text-white/5 group-hover:text-white/20 transition-colors duration-500" />
                </div>

                {/* Middle: Quote */}
                <blockquote className="flex-grow">
                  <p className="text-xl sm:text-2xl font-medium leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300">
                    "{item.quote}"
                  </p>
                </blockquote>

                {/* Bottom: Author */}
                <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 flex items-center justify-center text-sm font-bold text-white ring-4 ring-[#0a0a0a] shadow-md">
                    {item.author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-base tracking-wide">{item.author.name}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">
                      <span>{item.author.role}</span>
                      <span className="h-1 w-1 rounded-full bg-blue-500"></span>
                      <span>{item.author.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Extracted Component for cleaner code & micro-interactions
const NavButton = ({ onClick, icon, label }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
    whileTap={{ scale: 0.95 }}
    className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors active:scale-95"
    aria-label={label}
  >
    <div className="text-gray-400 transition-colors group-hover:text-white text-xl">
      {icon}
    </div>
  </motion.button>
);

export default TestimonialSection;