import { lazy, Suspense } from 'react'
import Reveal from '../components/ui/Reveal'
import WhatWeDo from '../components/sections/WhatWeDo'
import useSeo from '../hooks/useSeo'

const Services = lazy(() => import('../components/sections/Services'))
const Testimonials = lazy(() => import('../components/sections/Testimonials'))
const Process = lazy(() => import('../components/sections/Process'))
const FAQ = lazy(() => import('../components/sections/FAQ'))

function SectionFallback() {
  return <div className="min-h-24" aria-hidden="true" />
}

export default function Home() {
  useSeo({
    title: 'Atahastra | Web Development, UI/UX Design & Mobile Apps',
    description:
      'Atahastra is a digital agency specializing in web development, UI/UX design, mobile apps, and no-code solutions for startups and growing brands. One team from idea to launch.',
    path: '/',
  })

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
