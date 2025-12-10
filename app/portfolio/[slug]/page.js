import RightArrow from '@/components/mycomponent/RightArrow'
import SelectionLabel from '@/components/SelectionLabel'
import { projects } from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* 1. Hero Section - Full width top */}
      <div className="w-full h-[60vh] md:h-[80vh] relative">
         <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority
         />
         <div className="absolute inset-0 bg-black/40"></div>
         
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
            <div className="container mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-4">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        
        {/* 2. Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
           <div className="lg:col-span-4 space-y-8">
              <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 mb-8"></div>
              
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Role</h3>
                   <p className="text-xl font-medium">{project.category}</p>
                </div>
                <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Year</h3>
                   <p className="text-xl font-medium">2023</p>
                </div>
                <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Client</h3>
                   <p className="text-xl font-medium">Confidential</p>
                </div>
              </div>
           </div>

           <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                 {project.excerpt}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
                 <p>{project.introduction}</p>
              </div>
              <div className="mt-12">
                 <a href="#" className="inline-flex items-center gap-2 text-lg font-bold hover:underline decoration-2 underline-offset-4">
                    Visit Live Website 
                  <RightArrow />
                 </a>
              </div>
           </div>
        </div>

        {/* 3. Large Visual Break */}
        <div className="w-full h-[50vh] relative rounded-2xl overflow-hidden mb-32 group">
            <Image 
               src={project.image} 
               alt="Project details visual" 
               fill 
               className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>

        {/* 4. Challenges Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           <div>
              <SelectionLabel text="The Challenge" />
              <h3 className="text-4xl md:text-5xl font-bold mt-6 mb-8">Navigating complexity.</h3>
              <div className="prose prose-lg dark:prose-invert text-zinc-600 dark:text-zinc-400">
                <p>{project.challenges}</p>
              </div>
           </div>
           <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              {/* Using a placeholder or the same image if no other distinct images exist yet */}
              <Image 
                  src={project.image} 
                  alt="Challenge visual" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
           </div>
        </div>

        {/* 5. Solutions Section - Inverted Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           <div className="order-2 lg:order-1 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              <Image 
                  src={project.image} 
                  alt="Solution visual" 
                  fill 
                  className="object-cover"
              />
           </div>
           <div className="order-1 lg:order-2">
              <SelectionLabel text="The Solution" />
              <h3 className="text-4xl md:text-5xl font-bold mt-6 mb-8">Elegant simplicity.</h3>
              <div className="prose prose-lg dark:prose-invert text-zinc-600 dark:text-zinc-400">
                <p>{project.solutions}</p>
              </div>
           </div>
        </div>

        {/* 6. Navigation / Next Project */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-20 text-center">
            <p className="text-zinc-500 uppercase tracking-widest text-sm mb-4">Next Project</p>
            <Link href="/portfolio" className="inline-block group">
               <h2 className="text-5xl md:text-8xl font-bold group-hover:text-zinc-500 transition-colors duration-300">
                  All Projects
               </h2>
               <div className="h-1 bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300 mt-2"></div>
            </Link>
        </div>

      </div>
    </article>
  )
}