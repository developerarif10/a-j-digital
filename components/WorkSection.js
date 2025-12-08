"use client"
import { projects } from '@/lib/content'
import ProjectCard from './ProjectCard'

export default function WorkSection() {
  // Ensure we have at least 4 projects, or duplicate if needed for the layout
  const displayProjects = projects.length >= 4 ? projects.slice(0, 4) : [...projects, ...projects].slice(0, 4)

  return (
    <section id="work" className="py-24 container mx-auto px-6">
     <div className="flex flex-col md:grid md:grid-cols-3 items-start md:items-center gap-8 pb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-[0.9] justify-self-start">
            Selected Work
          </h2>
          
          <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg max-w-sm leading-relaxed justify-self-center">
            A showcase of our recent collaborations with ambitious brands and startups.
          </p>
            
          <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-black  font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors   whitespace-nowrap justify-self-end">
            View all
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {displayProjects.map((project, index) => (
          <ProjectCard key={`${project.slug}-${index}`} project={project} />
        ))}
      </div>
    </section>
  )
}
