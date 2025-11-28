import { services } from '@/lib/content'

export const metadata = {
  title: 'Services',
}

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Services & Pricing</h1>
        <p className="text-secondary text-lg">
          Flexible engagement models tailored to your project needs. From single-page applications to full-scale enterprise design systems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-surface p-8 rounded-3xl border border-muted shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="mb-6 bg-accent-teal/10 w-12 h-12 rounded-full flex items-center justify-center text-accent-teal font-bold text-xl">
              {index + 1}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-secondary mb-8 flex-grow">{service.description}</p>
            <div className="mb-8">
                <h4 className="font-bold text-sm uppercase text-secondary mb-3">Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                        <span key={tag} className="text-xs bg-muted px-2 py-1 rounded text-primary">{tag}</span>
                    ))}
                </div>
            </div>
            <a href="/contact" className="block text-center w-full py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
              Inquire
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}