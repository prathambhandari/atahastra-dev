import SectionLabel from '../ui/SectionLabel'

const stories = [
  {
    tag: 'Web Development',
    title: 'E-Commerce Platform Redesign',
    description: '2× conversions in 90 days with a custom React storefront.',
  },
  {
    tag: 'UI/UX Design',
    title: 'SaaS Dashboard for FinTech',
    description: '45% less onboarding drop-off after a full UX overhaul.',
  },
  {
    tag: 'Mobile App',
    title: 'Fitness App — 50K+ Downloads',
    description: 'Cross-platform Flutter app shipped in 12 weeks.',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="section-container py-20 md:py-28">
      <SectionLabel>Client Stories</SectionLabel>
      <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        Work that performs where it matters most.
      </h2>
      <p className="mt-4 max-w-xl text-base text-gray-muted md:text-lg">
        Real projects. Measurable outcomes.
      </p>

      <ul className="mt-12 divide-y divide-border">
        {stories.map((story) => (
          <li key={story.title}>
            <a
              href="#"
              className="group block py-6 transition-opacity hover:opacity-70 md:py-8"
            >
              <p className="text-sm text-gray-muted">{story.tag}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground md:text-xl">
                {story.title}
              </h3>
              <p className="mt-2 text-sm text-gray-muted">{story.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
