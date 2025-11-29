import ProjectCard from '@/components/ProjectCard'
import Testimonials from '@/components/Testimonials'
import { projects, services } from '@/lib/content'
import Link from 'next/link'

export default function Home() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-violet">Developer</span> & Designer.
          </h1>
          <p className="text-xl text-secondary mb-10 leading-relaxed max-w-2xl">
            Hi, I'm Sanne. I build accessible, high-performance web experiences that blend aesthetic design with robust engineering. Available for freelance & agency partnerships.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio" className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-accent-teal hover:text-primary transition-colors">
              View Work
            </Link>
            <Link href="/contact" className="bg-surface text-primary border border-muted px-8 py-4 rounded-full font-medium hover:bg-muted transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="bg-surface py-20 border-y border-muted">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold">What I Do</h2>
            <Link href="/services" className="text-accent-violet font-medium hover:underline mt-4 md:mt-0">View all services &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="p-6 bg-background rounded-2xl border border-muted">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      {/* Testimonials Snippet */}
      <Testimonials />
    </>
  )
}