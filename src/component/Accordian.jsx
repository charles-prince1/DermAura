import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Is this safe for sensitive or eczema-prone skin?", a: "Yes. Our formula is 100% alcohol-free, hypoallergenic, and dermatologist-tested using plant oils rather than harsh solvents." },
  { q: "How does an oil-based perfume last 12 hours?", a: "Traditional alcohol evaporates rapidly. Our lipid base binds to pulse points, releasing scent slowly and steadily." },
  { q: "Will the perfume leave greasy residue on clothing?", a: "No. We utilize fast-absorbing hemi-squalane oils that absorb within 30 seconds into the skin." },
  { q: "Are your botanical ingredients ethically sourced?", a: "Yes, all botanical extracts are sustainably harvested, vegan, and cruelty-free." },
  { q: "What if I purchase a bottle and dislike the scent?", a: "Every full-size bottle includes a 2ml sample vial. Test the vial first; if unsatisfied, return the unopened bottle for a full refund." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-brand-900/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 dark:text-brand-50">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-brand-200/60 dark:border-brand-800 pb-4">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center text-left py-2 font-serif text-lg text-brand-900 dark:text-brand-100 focus:outline-none"
                aria-expanded={openIndex === idx}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-500 transition-transform duration-300 ${openIndex === idx ? 'transform rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <p className="text-brand-800/70 dark:text-brand-200/70 text-sm leading-relaxed mt-2 pl-1 animate-fadeIn cursor-default pointer-events-none">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}