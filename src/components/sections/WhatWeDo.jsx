import Reveal from '../ui/Reveal'

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
    <section className="section-container pt-8 pb-16 md:pt-10 md:pb-24">
      <div className="relative overflow-hidden rounded-2xl border border-white/5 md:rounded-[2rem]">
        <img
          src="/hero.png"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.35] saturate-75"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-black/60 to-black/90" />

        <div className="relative z-10 px-5 py-10 sm:px-6 md:px-8 md:py-14 lg:px-10 lg:py-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-muted">
                What we do
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                We build digital products for your business.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-muted md:text-base">
                Websites, design, mobile apps, and no-code. One team from start to finish.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4">
            {offerings.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="flex h-full flex-col py-4 md:py-5">
                  <span className="text-xs font-medium tabular-nums text-gray-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-base font-bold leading-snug text-foreground md:text-[1.05rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-muted md:text-sm">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
