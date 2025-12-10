import Button from '@/components/mycomponent/Button';
import RightArrow from '@/components/mycomponent/RightArrow';
import SelectionLabel from '@/components/SelectionLabel';
import ServicesList from '@/components/ServicesList';

export const metadata = {
  title: 'About Us | Odommo Digital',
  description: 'Full Service Creative Studio specializing in web, mobile, and experiential design.',
};

export default function About() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-muted">
              {/* Using a high-quality Unsplash image that matches the 'creative team' vibe */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Creative Team Working Together"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Decorative circle element from design if needed, simplified for now */}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-4">
             <div className="flex items-center gap-2 mb-4">
                      <SelectionLabel text="What we do?"/>
                       </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              We Are Full Service <br /> Creative Studio
            </h1>
            <p className=" mb-10 max-w-md leading-relaxed text-lg">
              We craft premium digital work for web, mobile and experiential with
              creative agencies and global brands alike – putting passion.
            </p>

             <Button
            href="/services" 
            className="px-6 py-2.5 font-bold text-sm group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-sm hover:bg-primary hover:text-white transition-colors duration-300 w-fit mb-16"
             bgColor="bg-transparent"
            borderColor="hover:border-primary"
            slideHoverColor="bg-primary"
            hoverTextColor="hover:text-black dark:hover:text-white"
            icon={<RightArrow />}
          >
            View All Service
          </Button>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-10">
              <div>
                <h3 className="text-4xl font-bold mb-2">12+</h3>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                  Years of experience
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">85%</h3>
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                  Average Conversion Rate
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">300K+</h3>
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                  Traffic Generated
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">100%</h3>
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                  Client satisfaction score
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <div className="mb-12">
          {/* Faint 'Services' Title matching the design's background text look */}
          <h2 className="text-5xl md:text-7xl font-bold text-muted/50 dark:text-muted/10 tracking-wide">
            Services
          </h2>
        </div>

        <ServicesList />
      </section>

      {/* Footer CTA Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-5xl mx-auto leading-tight mb-16">
          Boost Your Business Up Ranking High{' '}
          <span className="text-primary">Level</span>
        </h2>
        
        <div className="flex justify-center">
             <Button 
            href="/contact" 
            className="px-10 py-4 rounded-sm duration-300 text-xs font-bold uppercase tracking-widest"
             bgColor="bg-transparent"
            borderColor="hover:border-primary"
            slideHoverColor="bg-primary"
            hoverTextColor="hover:text-black dark:hover:text-white"
            icon={<RightArrow />}
          >
            Get In Touch
          </Button>
        </div>
       
      </section>
    </div>
  );
}