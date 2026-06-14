import { BOOKING_URL } from '../data/booking'
import { CONTACT_EMAIL } from '../data/contact'
import Reveal from '../components/ui/Reveal'

export default function PrivacyPolicy() {
  return (
    <Reveal>
    <div className="section-container pt-8 pb-20 md:pt-10 md:pb-28">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-gray-muted">Last updated: June 13, 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-gray-muted md:text-lg">
          <section>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Introduction
            </h2>
            <p className="mt-3">
              Atahastra (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy.
              This policy explains how we collect, use, and protect information when you visit
              our website or contact us about our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Information we collect
            </h2>
            <p className="mt-3">
              We may collect information you provide directly, such as your name, email address,
              company name, and project details when you book a call, fill out a form, or
              contact us by email or social media.
            </p>
            <p className="mt-3">
              We may also collect basic technical data automatically, including your browser type,
              device information, pages visited, and general usage data through standard
              analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              How we use your information
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to inquiries and provide our services</li>
              <li>Schedule and manage meetings</li>
              <li>Improve our website and client experience</li>
              <li>Send relevant updates about projects you have engaged us for</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Third-party services
            </h2>
            <p className="mt-3">
              We use trusted third-party tools to operate our business. For example, scheduling
              is handled through Cal.com. These services may collect information according to
              their own privacy policies. We encourage you to review those policies when using
              such tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Cookies
            </h2>
            <p className="mt-3">
              Our website may use cookies and similar technologies to improve functionality and
              understand how visitors use the site. You can control cookies through your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Data retention and security
            </h2>
            <p className="mt-3">
              We keep personal information only as long as needed for the purposes described in
              this policy or as required by law. We take reasonable steps to protect your
              information, though no method of transmission over the internet is completely
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Your rights
            </h2>
            <p className="mt-3">
              Depending on where you live, you may have the right to access, correct, or delete
              your personal information, or to object to certain processing. To make a request,
              email us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">
              Contact us
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy or how we handle your data, email us
              at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <p className="mt-3">
              For project inquiries, you can also use our{' '}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                booking page
              </a>{' '}
              or connect with us on social media.
            </p>
          </section>
        </div>
      </div>
    </div>
    </Reveal>
  )
}
