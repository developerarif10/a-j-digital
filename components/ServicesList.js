'use client';

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import RightArrow from './mycomponent/RightArrow';

const services = [
  {
    id: 1,
    title: 'Digital Marketing',
    image: '/images/portfolio/work-1.webp',
    details: ['Stationary', 'Outdoor'],
  },
  {
    id: 2,
    title: 'Web Development',
    image: '/images/portfolio/work-2.webp',
    details: ['Art Direction', 'UX Design', 'UI Design'],
  },
  {
    id: 3,
    title: 'Video Editor',
    image: '/images/portfolio/work-1.webp',
    details: ['Content Creator', 'Presentation'],
  },
  {
    id: 4,
    title: 'Branding',
    image: '/images/portfolio/work-2.webp',
    details: ['Product', 'Engagement'],
  },
];

export default function ServicesList() {
  const [hoveredService, setHoveredService] = useState(null);
  
  // Mouse position logic for the CURSOR ONLY
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for the cursor
  const cursorX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const cursorY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full cursor-none-on-hover">
      
      {/* Custom Cursor "View Project" Circle - Follows Global Mouse */}
      <AnimatePresence>
        {hoveredService !== null && (
           <motion.div
              className="fixed top-0 left-0 bg-white text-black rounded-full w-24 h-24 z-50 flex flex-col items-center justify-center pointer-events-none drop-shadow-xl border border-gray-100"
              style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight">
                View <br /> Project
              </span>
           <RightArrow className='skew-y-[-20deg]'/>
            </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
            className="group border-t border-secondary/20 py-10 flex flex-col md:flex-row justify-between items-start md:items-center relative transition-colors duration-300" 
            // 'relative' here is key for positioning the image inside
          >
            {/* The Image - Positioned Absolutely relative to this specific Service Card */}
            <AnimatePresence>
              {hoveredService === service.id && (
                <motion.div
                  className="absolute right-0 md:right-10 top-1/2 z-20 w-[300px] h-[200px] md:w-[400px] md:h-[260px] rounded-xl overflow-hidden pointer-events-none shadow-2xl origin-center"
                  style={{
                    translateY: '-50%', // Centers vertically in the row
                    rotate: 6, // Aesthetic tilt
                  }}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }} 
                  animate={{ opacity: 1, scale: 1, x: 0 }} 
                  exit={{ opacity: 0, scale: 0.9, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content Layers - Z-index management to ensure text stays readable or behaves as desired */}
            <div className="relative z-30 pointer-events-none">
                 <h3 className={`text-4xl md:text-6xl font-bold transition-all duration-300 ${
                  hoveredService === service.id 
                    ? 'text-foreground translate-x-4' 
                    : 'text-foreground'
                }`}>
                  {service.title}
                </h3>
            </div>
            
            <div className={`mt-4 md:mt-0 text-right flex flex-col gap-1 transition-opacity duration-300 relative z-30 pointer-events-none ${
               hoveredService === service.id ? 'opacity-0' : 'opacity-50' 
               /* Hiding details on hover to prevent overlapping mess with the image, or we could keep them. 
                  Given the image is big and right-aligned, it likely covers the details text. 
                  Hiding details on hover is a cleaner UI choice here. */
            }`}>
              {service.details.map((detail, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-medium uppercase tracking-wider"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}
         <div className="border-t border-secondary/20"></div>
      </div>
    </div>
  );
}
