import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-muted py-12 mt-12">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold mb-4">Sanne Wijbenga</h3>
          <p className="text-secondary max-w-sm">
            Bridging the gap between design and engineering. Available for freelance projects and agency partnerships.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Sitemap</h4>
          <ul className="space-y-2 text-secondary">
            <li><Link href="/about" className="hover:text-accent-violet">About</Link></li>
            <li><Link href="/services" className="hover:text-accent-violet">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-accent-violet">Portfolio</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-secondary">
            <li><Link href="/legal/privacy" className="hover:text-accent-violet">Privacy Policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-accent-violet">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-muted text-center text-sm text-secondary">
        &copy; {year} Sanne Wijbenga. All rights reserved.
      </div>
    </footer>
  )
}