import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/content'

export const metadata = {
  title: 'Portfolio',
}

export default function Portfolio() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Work</h1>
      <p className="text-secondary text-lg mb-12 max-w-2xl">
        A selection of recent projects blending creativity with technical excellence.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}