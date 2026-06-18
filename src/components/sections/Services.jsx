import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const services = [
  {
    title: 'Web Development',
    description:
      'Custom websites and web apps built with React, Next.js, and modern frameworks. Fast, secure, and SEO-ready.',
  },
  {
    title: 'Web Design',
    description:
      'Visually striking, brand-aligned website designs that capture attention and guide users toward action.',
  },
  {
    title: 'UI/UX Design',
    description:
      'User research, wireframes, and interactive prototypes that make every interaction intuitive and delightful.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform apps for iOS and Android, from concept to App Store launch.',
  },
  {
    title: 'No-Code Solutions',
    description:
      'Webflow, Framer, Bubble, and Notion-powered builds that ship in days without a full dev team.',
  },
  {
    title: 'WordPress & Shopify',
    description:
      'WordPress sites and Shopify stores with custom themes, plugins, product setup, and content management built to launch and grow online.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-container pt-8 pb-20 md:pt-10 md:pb-28">
      <SectionLabel>Our Services</SectionLabel>
      <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        Everything you need to launch and grow online.
      </h2>
      <p className="mt-4 max-w-2xl text-base text-gray-muted md:text-lg">
        From pixel-perfect designs to production-ready code. One team, end to end.
      </p>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 60}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/5">
              <img
                src="/hero.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover brightness-[0.35] saturate-75 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/80" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-black/60 to-black/90" />

              <div className="relative z-10 p-6 md:p-8">
                <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-muted md:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <Button variant="ghost">Explore all services</Button>
      </div>
    </section>
  )
}
