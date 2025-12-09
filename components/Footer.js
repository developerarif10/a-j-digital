import { FlickeringGrid } from '@/components/ui/flickering-grid'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background pt-20 relative overflow-hidden ">
      <div className="container mx-auto px-6 mb-20 ">
        <div className="grid md:grid-cols-4 gap-12 mb-16 ">
          <div className="col-span-1 md:col-span-2 ">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              <span className="font-bold text-xl text-foreground">Odommo Digital</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              Crafting digital experiences that merge art with technology. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-muted-foreground">
                <Twitter size={18} />
              </a>    
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-muted-foreground">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-muted-foreground">
                <Github size={18} />
              </a>
            </div>
          </div>

        
            <div>
            <h4 className="font-bold mb-6 text-foreground">Sitemap</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#work" className="hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground">Legal</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Flickering Grid Section */}
      <div className="relative w-full h-[150px] md:h-[250px] overflow-hidden bg-background">
        {/* Layer 1 (Bottom): Blue Grid (The Text) */}
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#248cfd"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={250}
        />


        {/* Gradient Overlay: Top=Background(Opaque) -> Bottom=Transparent */}
        {/* This creates "Top Low Opacity, Down High Opacity" effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent z-20 pointer-events-none" />
      </div>
    </footer>
  )
}