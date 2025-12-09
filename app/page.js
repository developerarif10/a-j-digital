import CTASection from '@/components/CTASection'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import HowWeHelp from '@/components/HowWeHelp'
import Testimonials from '@/components/Testimonials'
import WhatWeDo from '@/components/WhatWeDo'
import WorkSection from '@/components/WorkSection'

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <WhatWeDo />
      <HowWeHelp />
      <Testimonials />
      <Faq />
      <CTASection />
    </>
  )
}