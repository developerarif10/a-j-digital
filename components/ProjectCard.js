import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full">
      <article className="bg-surface rounded-2xl overflow-hidden border border-muted h-full transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-video bg-muted relative">
          {/* Fallback layout if no image provided */}
          <div className="absolute inset-0 flex items-center justify-center text-secondary bg-accent-teal/20">
            <span className="font-medium">Project Preview</span>
          </div>
        </div>
        <div className="p-6">
          <span className="text-xs font-bold tracking-wider text-accent-violet uppercase mb-2 block">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent-teal transition-colors">
            {project.title}
          </h3>
          <p className="text-secondary line-clamp-2">
            {project.excerpt}
          </p>
        </div>
      </article>
    </Link>
  )
}