import Reveal from '../ui/Reveal'
import HeroVisual from './HeroVisual'

const offerings = [
  {
    title: 'We build your website',
    description:
      'Fast, responsive websites and web apps built to grow with your business.',
  },
  {
    title: 'We design your experience',
    description:
      'Clean UI/UX that looks professional and guides users to action.',
  },
  {
    title: 'We develop mobile apps',
    description:
      'iOS and Android apps from idea and design through App Store launch.',
  },
  {
    title: 'We ship with no-code',
    description:
      'Landing pages and tools on Webflow, Framer, and other platforms.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="section-container pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 xl:gap-12">
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              What we do
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              We build digital products for your business.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-muted md:text-base">
              Websites, design, mobile apps, and no-code. One team from start to finish.
            </p>
            <div className="mt-8 h-px w-full max-w-md bg-accent/40" />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {offerings.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article>
                  <span className="text-xs font-semibold tabular-nums text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-2 text-base font-bold leading-snug text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="flex w-full justify-center">
          <div className="lg:-translate-x-6 xl:-translate-x-10">
            <HeroVisual />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
