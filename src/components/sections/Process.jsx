import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const steps = [
  {
    title: 'Discover & Strategy',
    description:
      'We start by learning your business, audience, and goals. Together we define scope, priorities, and a clear roadmap before any design or code begins.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Design & Prototype',
    description:
      'Wireframes, UI designs, and interactive prototypes bring your product to life. We refine every screen with your feedback until the experience feels right.',
    image:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Build & Launch',
    description:
      'Our team handles development, QA, and deployment with care. We ship polished products on schedule and hand off everything you need to run with confidence.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Grow & Optimize',
    description:
      'Launch is just the beginning. We track performance, run tests, and make iterative improvements so your product keeps getting better over time.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Dedicated Team',
    description:
      'You get one point of contact and a cross-functional squad aligned on your project. Designers, developers, and strategists work as one team from day one.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Quality Assurance',
    description:
      'Every build goes through rigorous testing across devices and browsers. We catch issues early so your users get a smooth, reliable experience every time.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop',
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
            <article className="group relative h-full min-h-60 overflow-hidden rounded-2xl border border-white/5 md:min-h-72">
              <img
                src={step.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-[3px] brightness-[0.55] saturate-90 transition-transform duration-500 group-hover:scale-[1.15]"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-950/25 via-black/35 to-black/65" />

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
