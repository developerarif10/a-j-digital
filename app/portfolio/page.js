import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/content'

export const metadata = {
  title: 'Case Studies | Odommo Digital',
  description: 'Explore our selected work and case studies.',
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-gradient">
            Selected Work.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            We build digital products that define brands. Explore our recent case studies and see how we solve complex problems with elegant code.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.slug} 
              className={index % 3 === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
      
      <section className="container mx-auto px-6 mt-32 text-center">
         <p className="text-zinc-500 mb-4">Have a project in mind?</p>
         <a href="/contact" className="text-4xl md:text-6xl font-bold hover:text-primary transition-colors underline decoration-2 underline-offset-8">
            Let&apos;s talk.
         </a>
      </section>
    </main>
  )
}