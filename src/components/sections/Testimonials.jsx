import SectionLabel from '../ui/SectionLabel'
import testimonials from '../../data/testimonials'

function TestimonialItem({ quote, name, role }) {
  return (
    <figure className="flex w-64 shrink-0 flex-col px-6 md:w-72 md:px-8">
      <figcaption className="text-sm text-foreground">
        <span className="font-medium">{name}</span>
        <span className="text-gray-muted"> · {role}</span>
      </figcaption>
      <blockquote className="mt-3 text-sm leading-relaxed text-gray-muted md:text-base">
        &ldquo;{quote}&rdquo;
      </blockquote>
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
        <div className="marquee-track flex w-max items-start">
          {items.map((item, index) => (
            <TestimonialItem key={`${item.name}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
