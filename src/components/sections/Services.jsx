import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const services = [
  {
    title: 'Web Development',
    description: 'Custom sites and apps with React and Next.js.',
  },
  {
    title: 'Web Design',
    description: 'Striking designs aligned with your brand.',
  },
  {
    title: 'UI/UX Design',
    description: 'Wireframes and prototypes for smooth user flows.',
  },
  {
    title: 'Mobile App Development',
    description: 'iOS and Android apps, concept to launch.',
  },
  {
    title: 'No-Code Solutions',
    description: 'Webflow and Framer builds that ship fast.',
  },
  {
    title: 'WordPress & Shopify',
    description: 'WordPress and Shopify stores ready to launch.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-container pt-8 pb-20 md:pt-10 md:pb-28">
      <SectionLabel>Our Services</SectionLabel>
      <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        Everything you need to launch and grow online.
      </h2>

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
    </section>
  )
}
