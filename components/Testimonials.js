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
import { RiDoubleQuotesR } from 'react-icons/ri';
import SelectionLabel from './SelectionLabel';


const testimonials = [
  {
    id: 1,
    companyName: 'Velocity',
    companyIcon: <IoLogoElectron />,
    quote: 'They tailor their solutions to our specific needs and goals, creating a truly bespoke experience.',
    author: { name: 'Denis Slavska', role: 'CTO, Ailitic', location: 'New York, NY', img: 'https://i.pravatar.cc/150?u=1' },
    gradient: 'from-blue-500 via-cyan-400 to-transparent'
  },
  {
    id: 2,
    companyName: 'Vortex',
    companyIcon: <IoPlanet />,
    quote: 'They organized their work and internal management was outstanding. A benchmark for efficiency.',
    author: { name: 'Jahan Melad', role: 'PM, Buildwave', location: 'Austin, TX', img: 'https://i.pravatar.cc/150?u=2' },
    gradient: 'from-orange-500 via-amber-400 to-transparent'
  },
  {
    id: 3,
    companyName: 'Synergy',
    companyIcon: <IoLogoVenmo />,
    quote: 'Working with them was a great experience. The ROI we saw within the first month was incredible.',
    author: { name: 'Jim Halpert', role: 'Lead Eng, InHive', location: 'San Francisco, CA', img: 'https://i.pravatar.cc/150?u=3' },
    gradient: 'from-emerald-500 via-teal-400 to-transparent'
  },
  {
    id: 4,
    companyName: 'NextGen',
    companyIcon: <IoLogoVercel />,
    quote: 'The level of attention to detail and engineering excellence they brought to the table was unmatched.',
    author: { name: 'Sarah Connors', role: 'VP, Skynet', location: 'Los Angeles, CA', img: 'https://i.pravatar.cc/150?u=4' },
    gradient: 'from-purple-500 via-pink-400 to-transparent'
  },
  {
    id: 5,
    companyName: 'Quantum',
    companyIcon: <IoPrism />,
    quote: 'We scaled our infrastructure by 300% without a single minute of downtime thanks to their roadmap.',
    author: { name: 'David Kim', role: 'Director, Q-Labs', location: 'Seoul, KR', img: 'https://i.pravatar.cc/150?u=5' },
    gradient: 'from-indigo-500 via-violet-400 to-transparent'
  },
  {
    id: 6,
    companyName: 'Cyberdyne',
    companyIcon: <IoHardwareChip />,
    quote: 'Absolute professionals. They did not just write code; they solved complex business problems.',
    author: { name: 'Miles Dyson', role: 'CEO, Cyberdyne', location: 'Chicago, IL', img: 'https://i.pravatar.cc/150?u=6' },
    gradient: 'from-rose-500 via-red-400 to-transparent'
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
    <section ref={ref} className="relative w-full pt-12">
      
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
              <SelectionLabel text="Testimonials" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] justify-self-start">
           Real Results, Real <span className="text-zinc-400 dark:text-zinc-500">Transformations.</span>
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
          className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative flex-shrink-0 w-[85vw] sm:w-[500px] snap-center flex flex-col justify-between overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300 min-h-[320px]"
            >
              {/* Gradient Border Line */}
              <div className={`absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b ${item.gradient}`}></div>
              
              <div className="relative z-10 flex h-full flex-col p-8 sm:p-10">
                
                {/* Header: Author & Company */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                        <img src={item.author.img} alt={item.author.name} className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <h4 className="font-bold text-black dark:text-white text-lg leading-none">{item.author.name}</h4>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 italic">{item.author.role}</p>
                     </div>
                  </div>
                  <div className="text-3xl text-zinc-300 dark:text-zinc-700">
                     {item.companyIcon}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="flex-grow">
                  <p className="text-xl sm:text-2xl font-medium leading-relaxed text-zinc-700 dark:text-zinc-200">
                    {item.quote}
                  </p>
                </blockquote>

                {/* Footer Quote Icon */}
                <div className="absolute bottom-6 right-8">
                   <RiDoubleQuotesR className="text-6xl opacity-20 text-blue-500 transform rotate-12" />
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Extracted Component
const NavButton = ({ onClick, icon, label }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-sm"
    aria-label={label}
  >
    <div className="text-xl">
      {icon}
    </div>
  </motion.button>
);

export default TestimonialSection;