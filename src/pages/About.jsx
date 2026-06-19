import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'

export default function About() {
  return (
    <Reveal>
    <div className="section-container pt-8 pb-20 md:pt-10 md:pb-28">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          About Atahastra
        </h1>
        <p className="mt-6 text-base leading-relaxed text-gray-muted md:text-lg">
          Atahastra is a digital agency focused on websites, UI/UX design, mobile apps,
          and no-code solutions. We work with startups and growing brands to turn ideas
          into products that look sharp and work reliably.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-muted md:text-lg">
          From first wireframe to final launch, one team handles design, development,
          and delivery so you can move fast without sacrificing quality.
        </p>
      </div>

      <div id="contact" className="mt-16 border-t border-border pt-16">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Connect with us</h2>
        <p className="mt-3 max-w-xl text-base text-gray-muted">
          Follow along, email us, or reach out on social media.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-4 inline-block cursor-pointer text-base text-foreground transition-opacity hover:opacity-70"
        >
          {CONTACT_EMAIL}
        </a>
        <SocialLinks className="mt-6" />
      </div>
    </div>
    </Reveal>
  )
}
