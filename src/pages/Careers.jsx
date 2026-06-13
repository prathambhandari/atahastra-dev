import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'

export default function Careers() {
  return (
    <Reveal>
    <div className="section-container pt-8 pb-20 md:pt-10 md:pb-28">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Careers
        </h1>
        <p className="mt-6 text-base leading-relaxed text-gray-muted md:text-lg">
          We are a small team building websites, apps, and digital products for clients
          who care about quality design and reliable delivery.
        </p>

        <div className="mt-12 border-t border-border pt-12">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            No open roles right now
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-muted md:text-lg">
            We do not have any open positions at the moment. When new opportunities come
            up, we will list them here.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-muted md:text-lg">
            Interested in working with us in the future? Follow us on social media to stay
            updated.
          </p>
          <SocialLinks className="mt-6" />
        </div>
      </div>
    </div>
    </Reveal>
  )
}
