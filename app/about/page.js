import { personalInfo, timeline } from '@/lib/content'

export const metadata = {
  title: 'About Me',
}

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bio Column */}
        <div>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose prose-lg text-secondary">
            <p className="mb-6">{personalInfo.bio}</p>
            <p className="mb-6">
              With a background in both design and development, I bridge the gap between aesthetics and functionality. I believe the web should be accessible, fast, and delightful to use.
            </p>
            <p>
              When I'm not coding, I'm exploring new UI trends, contributing to open source, or experimenting with WebGL interactions.
            </p>
          </div>
          
          <div className="mt-8">
            <button className="flex items-center gap-2 bg-muted px-6 py-3 rounded-lg font-medium hover:bg-accent-teal/20 transition-colors text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Download CV (PDF)
            </button>
          </div>
        </div>

        {/* Timeline Column */}
        <div className="bg-surface p-8 rounded-3xl border border-muted">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-accent-peach">
                <span className="text-sm font-bold text-accent-violet bg-background px-2 py-1 rounded mb-2 inline-block border border-muted">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold">{item.role}</h3>
                <p className="text-sm font-medium text-primary mb-1">{item.company}</p>
                <p className="text-sm text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}