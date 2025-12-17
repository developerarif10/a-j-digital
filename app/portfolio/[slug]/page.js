import RightArrow from '@/components/mycomponent/RightArrow'
import { projects } from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
   const { slug } = await params
   const project = projects.find(p => p.slug === slug)
   
   if (!project) return {}

   return {
      title: `${project.title} - Case Study | Odommo Digital`,
      description: project.excerpt,
   }
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <article className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      
      {/* 1. Hero Section */}
      <div className="w-full h-[70vh] md:h-[90vh] relative">
         <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority
         />
         <div className="absolute inset-0 bg-black/50"></div>
         
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-10">
            <div className="container mx-auto">
                <motion_h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 tracking-tighter">
                  {project.title}
                </motion_h1>
                
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 border-t border-white/20 pt-8">
                   <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Service</p>
                      <p className="text-xl text-white font-medium">{project.category}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Stack</p>
                      <div className="flex flex-wrap gap-2 text-white/90">
                           {project.stack.join(", ")}
                      </div>
                   </div>
                   <div className="md:ml-auto">
                        <a href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors">
                            Start a Project like this
                            <RightArrow className="w-4 h-4" />
                        </a>
                   </div>
                </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-32">
        
        {/* 2. Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
           <div className="lg:col-span-3">
              <span className="text-gradient font-bold tracking-widest uppercase text-sm">01 / Overview</span>
           </div>

           <div className="lg:col-span-9">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-foreground">
                 {project.excerpt}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                 <p>{project.introduction}</p>
              </div>
           </div>
        </div>

        {/* 3. Visual Break */}
        <div className="w-full h-[50vh] md:h-[70vh] relative rounded-3xl overflow-hidden mb-32 group border border-zinc-200 dark:border-zinc-800">
            <Image 
               src={project.image} 
               alt="Project visual" 
               fill 
               className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
        </div>

        {/* 4. The Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32 items-start">
           <div>
               <span className="text-gradient font-bold tracking-widest uppercase text-sm mb-4 block">02 / The Challenge</span>
               <h3 className="text-4xl md:text-5xl font-bold mb-6">{project.challenges_heading}</h3>
               <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                 <p>{project.challenges}</p>
               </div>
           </div>
           
           <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <h4 className="text-xl font-bold mb-6 relative z-10">Key Objectives</h4>
                <ul className="space-y-4 relative z-10">
                    {project.core_objectives.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <Image src='/green_tick.svg' alt="green tick" width={20} height={20} />
                            <span className="text-lg">{item}</span>
                        </div>
                    ))}
                </ul>
           </div>
        </div>

        {/* 5. The Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
               <Image 
                   src={project.image} 
                   alt="Solution visual" 
                   fill 
                   className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
           <div className="order-1 lg:order-2">
               <span className="text-gradient font-bold tracking-widest uppercase text-sm mb-4 block">03 / The Solution</span>
               <h3 className="text-4xl md:text-5xl font-bold mb-6">{project.solutions_heading}</h3>
               <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                 <p>{project.solutions}</p>
               </div>
           </div>
        </div>

        {/* 6. Refined Navigation */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-20">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                     <p className="text-zinc-500 mb-2">Next Case Study</p>
                     <h3 className="text-3xl md:text-5xl font-bold">{nextProject.title}</h3>
                </div>
                <Link href={`/portfolio/${nextProject.slug}`} className="group flex items-center gap-4 text-xl font-bold hover:text-primary transition-colors">
                    View Project 
                    <span className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                        <RightArrow />
                    </span>
                </Link>
            </div>
        </div>

      </div>
    </article>
  )
}

function motion_h1({ children, className }) {
    // Simple wrapper to avoid client component issues in this server component for now.
    // In a real optimized app, we'd make a client component wrapper for Framer Motion.
    return <h1 className={className}>{children}</h1>
}