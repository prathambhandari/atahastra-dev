import { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

const stats = [
  { value: '120+', label: 'Projects delivered across web, mobile, and no-code' },
  { value: '<4wks', label: 'Average time from kickoff to first live prototype' },
  { value: '98%', label: 'Client satisfaction rate across all engagements' },
]

const industries = [
  {
    title: 'Startups & SaaS',
    description:
      'MVPs, landing pages, and product dashboards built to validate ideas fast and scale with traction.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    tint: 'from-black/80',
  },
  {
    title: 'E-Commerce & Retail',
    description:
      'Online stores, product catalogs, and checkout experiences optimized for conversion and mobile shoppers.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tint: 'from-black/80',
  },
  {
    title: 'Agencies & Creators',
    description:
      'Portfolio sites, brand identities, and no-code workflows that let creative teams ship without bottlenecks.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    tint: 'from-black/80',
  },
]

export default function Stats() {
  const [slide, setSlide] = useState(0)

  return (
    <section className="section-container py-20 md:py-28">
      <SectionLabel>Measurable Outcomes</SectionLabel>
      <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        Results that speak louder than promises.
      </h2>
      <p className="mt-4 max-w-xl text-base text-gray-muted md:text-lg">
        Real impact from day one. These are outcomes from projects we&apos;ve shipped.
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.value} className="text-center md:text-left">
            <div className="inline-block border-b-2 border-foreground pb-1">
              <span className="text-4xl font-bold text-foreground md:text-5xl">
                {stat.value}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-muted md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {industries.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-border"
          >
            <div className="relative aspect-[4/5] bg-cover bg-center md:aspect-[3/4]" style={{ backgroundImage: `url('${item.image}')` }}>
              <div className={`absolute inset-0 bg-gradient-to-t ${item.tint} to-transparent transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-bold text-white md:text-xl">{item.title}</h3>
                <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-300 ease-out group-hover:mt-2 group-hover:max-h-32 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <Button variant="ghost">View industries we serve</Button>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setSlide((s) => (s === 0 ? industries.length - 1 : s - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => setSlide((s) => (s === industries.length - 1 ? 0 : s + 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-page transition-opacity hover:opacity-90"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
