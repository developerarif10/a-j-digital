"use client"
import SelectionLabel from './SelectionLabel'
import Button from './mycomponent/Button'
import RightArrow from './mycomponent/RightArrow'

export default function HowWeHelp() {
  return (
    <section id="how-we-help" className="py-12 md:py-6">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header: Real Impact */}
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-6 md:gap-8 mb-2 md:mb-8 pb-2 md:pb-8">
   
          <div className="flex flex-col gap-1 justify-self-start">
            <SelectionLabel text="Case study" />
          </div>
          
          {/* Center: Title */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] justify-self-start min-w-max">
             <span className="">Real Impact, </span><br/>
            <span className="text-zinc-400 dark:text-zinc-600">Proven Results.</span>
          </h2>

          {/* Right: Link */}
          <div className="flex  justify-self-start md:justify-self-end">
            <div className="pb-2"> <Button
               href="/case-studies" 
               className="px-6 py-2 font-bold text-lg shadow-lg shadow-gray-200/5"
               bgColor="bg-transparent"
               borderColor="border-zinc-200 dark:border-zinc-800 hover:border-primary"
               slideHoverColor="bg-primary"
               hoverTextColor="hover:text-black dark:hover:text-white"
               icon={<RightArrow />}
             >
               Full case study
             </Button></div>
          </div>
        </div>

        {/* Top Row: Bento Grid 3 Cols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1: Overview */}
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
            <div>
              <span className="text-zinc-500 dark:text-zinc-400 font-medium tracking-wide">Overview</span>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-black dark:text-white">
                Crafted a refined digital identity and eCommerce experience for a luxury skincare brand, resulting in a 180% increase in online conversions.
              </p>
            </div>
          </div>

          {/* Card 2: Image / Project */}
          <div className="relative bg-zinc-900 rounded-xl overflow-hidden min-h-[400px] lg:min-h-[500px] group">
            <img 
              src="/images/portfolio/work-1.webp" 
              alt="Odommo Digital" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between pt-10">
               <h3 className="text-white text-2xl md:text-3xl font-medium text-center">Odommo Digital</h3>
               <span className="text-white/80 text-sm font-medium text-center">2025</span>
            </div>
          </div>

          {/* Card 3: Testimonial */}
          <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
             <div>
               <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-black dark:text-white">
                 "They elevated our entire identity and helped us connect with our audience in a way we never imagined."
               </p>
             </div>
             
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-300">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Sophia Reynolds" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-black dark:text-white">Sophia Reynolds</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">CEO of Odommo Digital</p>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Row: Stats 4 Cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 flex flex-col justify-between h-[200px]">
             <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white relative">
               15<span className="text-2xl align-top text-blue-600">+</span>
             </h3>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Years of Experience</p>
          </div>

        {/* Stat 2 */}
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 flex flex-col justify-between h-[200px]">
             <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white relative">
               100<span className="text-2xl align-top text-blue-600">+</span>
             </h3>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Projects completed</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 flex flex-col justify-between h-[200px]">
             <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white relative">
               97<span className="text-2xl align-top text-blue-600 ml-1">%</span>
             </h3>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Client satisfaction rate</p>
          </div>

          {/* Stat 4 */}
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 flex flex-col justify-between h-[200px]">
             <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white relative">
               75<span className="text-2xl align-top text-blue-600">%</span>
             </h3>
             <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">Conversion rate improvement</p>
          </div>
        </div>

      </div>
    </section>
  )
}
