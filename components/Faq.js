'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import SelectionLabel from './SelectionLabel'
import RightArrow from './mycomponent/RightArrow'
import UnderlineToBackground from './mycomponent/underline-to-background'

const faqs = [
  {
    question: "What is Odommo Digital?",
    answer: "Odommo Digital is a full-service digital agency specializing in high-performance web development, modern UI/UX design, and strategic digital growth. We function as your dedicated partner in building a powerful online presence."
  },
  {
    question: "How does the process work?",
    answer: "We start with a discovery call to understand your goals. Then, we move to strategic planning and design. Once approved, we build your solution using the latest technologies. Finally, we launch, test, and offer ongoing support to ensure your success."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use industry-standard encryption, secure hosting environments (like Vercel/AWS), and best practices in code security to ensure your data and your users' data remain protected at all times."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We believe in long-term partnerships. We offer various maintenance packages that include security updates, content changes, performance monitoring, and priority support to keep your digital assets running smoothly."
  },
  {
    question: "Is there a free consultation available?",
    answer: "Absolutely. We offer a complimentary initial consultation to discuss your project requirements, assess fit, and provide you with a roadmap for your digital transformation."
  },
  {
    question: "Why choose Odommo Digital over others?",
    answer: "We combine aesthetic excellence with technical rigor. Unlike generic agencies, we don't just build websites; we build digital powerhouses designed to convert. Our hybrid approach ensures you get both beautiful design and rock-solid engineering."
  }
]


export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  }
 const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

    const words = "We know every project is unique, and you might have some questions before getting started.".split(" ")

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Static Content */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 lg:sticky lg:top-32 h-fit">
            <SelectionLabel text="FAQs" />
          
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] justify-self-start">
            <span className="">Frequently Asked </span><br/>
            <span className="text-zinc-400 dark:text-zinc-600">Questions.</span>
          </h2>
            
    <div>
      <motion.h2
        initial="hidden"
        animate="visible"
        className='mb-6'
        variants={fadeInVariants}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants} className="inline-block mr-1">
            {word}
          </motion.span>
        ))} </motion.h2>
        <motion.span variants={wordVariants} className="inline-block">
          <UnderlineToBackground className="cursor-pointer">
            <div className="flex items-center gap-2">Contact Us <RightArrow/></div>
          </UnderlineToBackground>
        </motion.span>
     
    </div>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <span className="text-lg md:text-xl font-medium tracking-tight pr-8">{faq.question}</span>
                  <span className={`relative flex items-center justify-center w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    index === openIndex ? 'rotate-45' : 'rotate-0'
                  }`}>
                    <Plus className="w-6 h-6 text-foreground" />
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {index === openIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-muted-foreground leading-relaxed text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
