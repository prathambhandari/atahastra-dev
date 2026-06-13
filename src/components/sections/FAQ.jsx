import { useState } from 'react'
import SectionLabel from '../ui/SectionLabel'
import faqItems from '../../data/faq'

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 pr-4 text-left md:py-8 md:pr-6"
      >
        <span className="text-base font-semibold text-foreground md:text-lg">
          {question}
        </span>
        <span
          className={`faq-icon flex h-9 w-9 shrink-0 items-center justify-center text-2xl font-light leading-none text-gray-muted md:h-10 md:w-10 md:text-3xl ${isOpen ? 'faq-icon-open' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div className={`faq-answer ${isOpen ? 'faq-answer-open' : ''}`}>
        <div className="overflow-hidden">
          <p className="pb-6 pr-4 text-sm leading-relaxed text-gray-muted md:pb-8 md:pr-6 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section-container pt-8 pb-8 md:pt-10 md:pb-10">
      <SectionLabel>FAQ</SectionLabel>
      <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
        Common questions, answered.
      </h2>
      <p className="mt-4 max-w-xl text-base text-gray-muted md:text-lg">
        Everything you need to know before we start working together.
      </p>

      <div className="mt-12 w-full border-t border-border">
        {faqItems.map((item, index) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  )
}
