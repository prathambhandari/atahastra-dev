import { Link } from 'react-router-dom'
import SocialLinks from '../components/ui/SocialLinks'
import Reveal from '../components/ui/Reveal'
import { JOBS_EMAIL } from '../data/contact'
import useSeo from '../hooks/useSeo'
import { PAGE_SEO } from '../data/seo'

export default function Careers() {
  useSeo(PAGE_SEO.careers)

  return (
    <div className="bg-black text-white min-h-[75vh]">
      <div className="section-container pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              Studio
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Careers
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-gray-300 md:text-xl font-medium">
              Build real client work: websites, apps, and stores that ship.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
              We are a small agency team. When we hire, we look for people who care
              about clean design, fast builds, and clear client communication.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid max-w-3xl gap-10 border-t border-white/[0.08] pt-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-white">What we look for</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-400">
              Clean builds, clear communication, and ownership from first commit
              to launch. You should be comfortable working directly with clients
              on websites, mobile apps, Shopify stores, and product UI.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-gray-400">
              <li>· Web developers: React, responsive builds, and page speed</li>
              <li>· Mobile developers: React Native and store releases</li>
              <li>· Shopify specialists: themes, migrations, and conversion</li>
              <li>· UI designers: flows, Figma systems, and prototypes</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Open inquiries</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-400">
              We hire project by project. If you do strong work, send your
              portfolio, your role, and a short note about one shipped project to{' '}
              <a
                href={`mailto:${JOBS_EMAIL}`}
                className="text-white font-mono hover:underline"
              >
                {JOBS_EMAIL}
              </a>
              .
            </p>

            <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#070707] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Direct Application
              </p>
              <a
                href={`mailto:${JOBS_EMAIL}?subject=Application%20-%20Atahastra`}
                className="mt-2 inline-flex items-center gap-2 font-mono text-sm font-semibold text-white hover:underline"
              >
                <span>{JOBS_EMAIL}</span>
                <span>↗</span>
              </a>
              <p className="mt-1 text-xs text-gray-500">
                Include links to your GitHub, portfolio, or past live projects.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${JOBS_EMAIL}?subject=Application%20-%20Atahastra`}
                className="minimal-button-primary rounded-full px-7 py-3 text-sm font-semibold"
              >
                Apply via email →
              </a>
              <Link
                to="/services"
                className="minimal-button-secondary rounded-full px-7 py-3 text-sm font-medium"
              >
                See our work
              </Link>
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
