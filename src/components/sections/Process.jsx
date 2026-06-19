import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const steps = [
  {
    title: 'Discover & Strategy',
    description: 'We learn your goals and define a clear roadmap.',
  },
  {
    title: 'Design & Prototype',
    description: 'Wireframes and UI refined with your feedback.',
  },
  {
    title: 'Build & Launch',
    description: 'Development, QA, and deployment on schedule.',
  },
  {
    title: 'Grow & Optimize',
    description: 'Analytics and updates to keep performance strong.',
  },
  {
    title: 'Dedicated Team',
    description: 'One contact and a full design and dev squad.',
  },
  {
    title: 'Quality Assurance',
    description: 'Tested across devices for a flawless experience.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section-container pt-8 pb-20 md:pt-10 md:pb-28">
      <SectionLabel>How We Work</SectionLabel>
      <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        A proven process from idea to launch.
      </h2>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 60}>
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
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-muted md:text-base">
                  {step.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
