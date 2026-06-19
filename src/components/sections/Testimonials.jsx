import SectionLabel from '../ui/SectionLabel'
import testimonials from '../../data/testimonials'

function TestimonialItem({ quote, name, role }) {
  return (
    <figure className="group relative flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-white/5 md:w-80">
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

      <div className="relative z-10 flex min-h-[11rem] flex-col p-6 md:min-h-[12rem] md:p-8">
        <figcaption className="text-sm text-foreground">
          <span className="font-medium">{name}</span>
          <span className="text-gray-muted"> · {role}</span>
        </figcaption>
        <blockquote className="mt-3 text-sm leading-relaxed text-gray-muted md:text-base">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </figure>
  )
}

export default function Testimonials() {
  const items = [...testimonials, ...testimonials]

  return (
    <section className="section-container overflow-hidden py-16 md:py-20">
      <SectionLabel>Testimonials</SectionLabel>
      <h2 className="max-w-xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        What clients say about working with us.
      </h2>

      <div className="marquee-mask mt-10 overflow-hidden">
        <div className="marquee-track flex w-max items-stretch gap-4 md:gap-5">
          {items.map((item, index) => (
            <TestimonialItem key={`${item.name}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
