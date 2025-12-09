
"use client";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%"
      }}
      animate={{
        backgroundSize: "100% 100%"
      }}
      transition={{
        duration: 1,
        ease: "linear",
        delay: 0.5
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline"
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-primary to-primary px-1 py-0`,
        className
      )}
    >
      {children}
    </motion.span>
  )
}
