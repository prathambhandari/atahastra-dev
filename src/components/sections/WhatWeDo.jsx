import Button from '../ui/Button'

const offerings = [
  {
    title: 'We build your website',
    description:
      'Custom websites and web apps that are fast, responsive, and ready to grow with your business.',
  },
  {
    title: 'We design your experience',
    description:
      'Clean UI/UX that looks professional and helps visitors understand what you offer.',
  },
  {
    title: 'We develop mobile apps',
    description:
      'iOS and Android apps built from your idea, through design, to launch on the app stores.',
  },
  {
    title: 'We ship with no-code',
    description:
      'Landing pages, dashboards, and tools on Webflow, Framer, and other platforms, live in days.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="section-container pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          We build digital products for your business.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-muted md:text-lg">
          Websites, design, mobile apps, and no-code. One team from start to finish.
        </p>
      </div>

      <ul className="mt-12 max-w-3xl divide-y divide-border">
        {offerings.map((item) => (
          <li key={item.title} className="py-6 first:pt-0 md:py-8">
            <h3 className="text-lg font-semibold text-foreground md:text-xl">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-muted md:text-base">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Button>Start a project</Button>
      </div>
    </section>
  )
}
