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
            <span className="text-secondary text-sm font-medium tracking-widest uppercase mb-6 block">
              What we do?
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              We Are Full Service <br /> Creative Studio
            </h1>
            <p className="text-secondary mb-10 max-w-md leading-relaxed text-lg">
              We craft premium digital work for web, mobile and experiential with
              creative agencies and global brands alike – putting passion.
            </p>

            <button className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-sm hover:bg-primary hover:text-white transition-colors duration-300 w-fit mb-16">
              <span className="font-medium tracking-wide">View All Service</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3" // Standard arrow for now, diagonal is d="M7 17L17 7M17 7H7M17 7V17"
                ></path>
              </svg>
            </button>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-10">
              <div>
                <h3 className="text-4xl font-bold mb-2">12+</h3>
                <p className="text-xs text-secondary font-semibold uppercase tracking-wide">
                  Years of experience
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">85%</h3>
                <p className="text-xs text-secondary font-semibold uppercase tracking-wide">
                  Average Conversion Rate
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">300K+</h3>
                <p className="text-xs text-secondary font-semibold uppercase tracking-wide">
                  Traffic Generated
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">100%</h3>
                <p className="text-xs text-secondary font-semibold uppercase tracking-wide">
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
          <h2 className="text-5xl md:text-7xl font-bold text-muted/50 dark:text-muted/10 tracking-tight">
            Services
          </h2>
        </div>

        <ServicesList />
      </section>

      {/* Footer CTA Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-5xl mx-auto leading-tight mb-16 text-secondary/30">
          Boost Your Business Up Ranking High{' '}
          <span className="text-foreground/20">Level</span>
        </h2>
        
        <div className="flex justify-center">
             <button className="border border-secondary/30 text-secondary px-10 py-4 rounded-sm hover:border-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                Get In Touch
            </button>
        </div>
       
      </section>
    </div>
  );
}