import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
         
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Your budget is <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-black dark:bg-black text-black dark:text-white px-4 py-1 transform -rotate-2 inline-block rounded-sm">
                no longer an issue
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            We know that cost can be an obstacle for companies to take action 
            on climate change, so we've done everything possible to make your 
            sustainability journey affordable.
          </p>
          
              {/* Button */}
        <div className="mt-16 text-center">
            <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-primary text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
                <div className="w-6 h-6 bg-black  rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                </div>
                Schedule a call
            </Link>
        </div>
        </div>      
        </div>

      

      </div>
    </section>
  );
}
