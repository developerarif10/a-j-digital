"use client"
import { projects } from '@/lib/content'
import ProjectCard from './ProjectCard'
import Button from './mycomponent/Button'
import RightArrow from './mycomponent/RightArrow'

export default function WorkSection() {
  // Ensure we have at least 4 projects, or duplicate if needed for the layout
  const displayProjects = projects.length >= 4 ? projects.slice(0, 4) : [...projects, ...projects].slice(0, 4)

  return (
    <section id="work" className="py-24 container mx-auto px-6">
     <div className="flex flex-col md:grid md:grid-cols-3 items-start md:items-center gap-6 pb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] justify-self-start">
            <span className="">Selected </span>
            <span className="text-zinc-400 dark:text-zinc-600">Work.</span>
          </h2>

          <p className="text-zinc-500 dark:text-zinc-400 text-end md:text-lg max-w-sm leading-relaxed justify-self-center">
            A showcase of our recent collaborations with ambitious brands and startups.
          </p>
            
          <Button 
            className="w-full sm:w-auto px-6 py-2 font-medium whitespace-nowrap justify-self-end"
            bgColor="bg-transparent"
            borderColor="border-zinc-200 dark:border-zinc-800 hover:border-primary"
            slideHoverColor="bg-primary"
            hoverTextColor="hover:text-black dark:hover:text-white"
            icon={<RightArrow  />}
          >
            View all
          </Button>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {displayProjects.map((project, index) => (
          <ProjectCard key={`${project.slug}-${index}`} project={project} />
        ))}
      </div>
    </section>
  )
}
