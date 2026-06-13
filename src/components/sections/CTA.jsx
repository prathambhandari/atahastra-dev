import Button from '../ui/Button'

export default function CTA() {
  return (
    <section id="contact" className="section-container py-20 md:py-28">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Ready to build something great?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-gray-muted md:text-lg">
          From landing pages to full-scale apps — let&apos;s turn your vision into
          a product your users will love.
        </p>
        <div className="mt-8">
          <Button>Talk to our team</Button>
        </div>
      </div>
    </section>
  )
}
