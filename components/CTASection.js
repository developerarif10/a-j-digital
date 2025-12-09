import { MousePointer2 } from 'lucide-react';
import Button from './mycomponent/Button';
import RightArrow from './mycomponent/RightArrow';

export default function CTASection() {
  return (
    <section className="relative py-32 bg-background overflow-hidden flex items-center justify-center min-h-[500px]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Subtle Glow */}
        <div className="absolute left-0 right-0 top-1/2 -z-10 m-auto h-[310px] w-[310px] -translate-y-1/2 rounded-full bg-blue-500 opacity-10 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-10 leading-tight">
          Let's Create Something <br />
          <span className="relative inline-flex items-center gap-3 md:gap-6">
            <span className="text-blue-600">Awesome?</span>
            {/* Cursor Icon */}
             <MousePointer2 className="w-8 h-8 md:w-14 md:h-14 text-black dark:text-white fill-black dark:fill-white rotate-[-15deg] translate-y-1" />
          </span>
        </h2>
        <Button 
            href="/contact" 
            className="px-8 py-2.5 font-medium text-lg shadow-lg mt-4"
            bgColor="bg-white dark:bg-black"
            textColor='text-black dark:text-white'
            borderColor="hover:border-primary"
            slideHoverColor="bg-primary"
            hoverTextColor="hover:text-black dark:hover:text-white"
            icon={<RightArrow  />}
        >
           Schedule a call
        </Button>
      </div>
    </section>
  );
}
