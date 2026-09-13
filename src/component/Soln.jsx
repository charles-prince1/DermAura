import React from 'react';

export default function Solutions() {
  const useCases = [
    { title: 'Sensitive Skin & Eczema', desc: 'No sting, no rash. Wear luxury scents comfortably with non-comedogenic oils.' },
    { title: 'Daily Skin & Scent Dual Action', desc: 'Simplify beauty routines by combining morning moisture with signature scent.' },
    { title: 'Aromatherapy Evening Rituals', desc: 'Relax with soothing botanicals that calm the mind while nourishing skin.' },
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 dark:text-brand-50">Solutions for Every Skin Type</h2>
          <p className="text-brand-800/70 dark:text-brand-200/70 mt-3">Tailored applications for modern wellness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((uc, i) => (
            <div key={i} className="bg-brand-100/40 dark:bg-brand-800/30 p-8 rounded-2xl border border-brand-200/40 dark:border-brand-700/50 hover:shadow-md transition">
              <h3 className="font-serif text-xl text-brand-900 dark:text-brand-100 mb-3">{uc.title}</h3>
              <p className="text-brand-800/70 dark:text-brand-200/70 text-sm leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}