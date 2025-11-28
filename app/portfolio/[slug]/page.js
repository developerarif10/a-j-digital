import { projects } from '@/lib/content'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Generate static params if you want static export, otherwise dynamic
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetail({ params }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="container mx-auto px-6 py-20">
      <Link href="/portfolio" className="text-secondary hover:text-primary mb-8 inline-block">
        &larr; Back to Portfolio
      </Link>
      
      <div className="bg-muted w-full h-64 md:h-96 rounded-3xl mb-12 flex items-center justify-center">
         <span className="text-secondary font-medium">Main Project Image Placeholder</span>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <div className="prose prose-lg text-secondary">
             <p className="lead text-xl text-primary font-medium mb-6">{project.excerpt}</p>
             <p>{project.content}</p>
             <h3>The Approach</h3>
             <p>We prioritized accessibility and performance from day one. Using a mobile-first approach, we ensured the site loads under 2 seconds on 3G networks.</p>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-surface p-6 rounded-2xl border border-muted sticky top-24">
            <h3 className="font-bold mb-4">Tech Stack</h3>
            <ul className="flex flex-wrap gap-2 mb-8">
              {project.stack.map(tech => (
                <li key={tech} className="bg-accent-violet/20 text-primary px-3 py-1 rounded-full text-sm">
                  {tech}
                </li>
              ))}
            </ul>
            <h3 className="font-bold mb-2">Category</h3>
            <p className="text-secondary mb-8">{project.category}</p>
            
            <button disabled className="w-full bg-primary text-white py-3 rounded-lg font-medium opacity-70 cursor-not-allowed">
              Visit Live Site (Demo)
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}