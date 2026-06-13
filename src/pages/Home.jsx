import { lazy, Suspense } from 'react'
import Reveal from '../components/ui/Reveal'
import WhatWeDo from '../components/sections/WhatWeDo'

const Services = lazy(() => import('../components/sections/Services'))
const Testimonials = lazy(() => import('../components/sections/Testimonials'))
const Process = lazy(() => import('../components/sections/Process'))
const FAQ = lazy(() => import('../components/sections/FAQ'))

function SectionFallback() {
  return <div className="min-h-24" aria-hidden="true" />
}

export default function Home() {
  return (
    <>
      <Reveal>
        <WhatWeDo />
      </Reveal>

      <Suspense fallback={<SectionFallback />}>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
      </Suspense>
    </>
  )
}
