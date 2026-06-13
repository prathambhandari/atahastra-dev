import SocialLinks from '../components/ui/SocialLinks'

const team = [
  {
    name: 'Prathamesh',
    role: 'Founder & CEO',
    bio: 'Leads strategy, client partnerships, and delivery across web, design, and mobile projects.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    bio: 'Oversees UI/UX, brand identity, and the visual direction of every product we ship.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Sam Patel',
    role: 'Lead Developer',
    bio: 'Builds fast, scalable websites and apps with a focus on clean code and performance.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
]

export default function About() {
  return (
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

      <div className="mt-16 border-t border-border pt-16">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Our team</h2>
        <p className="mt-3 max-w-xl text-base text-gray-muted">
          The people behind the work.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <article key={person.name}>
              <img
                src={person.image}
                alt={person.name}
                className="aspect-square w-full max-w-[280px] rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-gray-muted">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-muted">{person.bio}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-16">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Connect with us</h2>
        <p className="mt-3 max-w-xl text-base text-gray-muted">
          Follow along or reach out on social media.
        </p>
        <SocialLinks className="mt-6" />
      </div>
    </div>
  )
}
