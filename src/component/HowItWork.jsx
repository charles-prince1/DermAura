import React from 'react';

export default function HowItWorks() {
  const steps = [
    { num: '1', title: 'Select Your Scent', desc: 'Choose from our botanical blends or take our skin-matching quiz.' },
    { num: '2', title: 'Apply to Pulse Points', desc: 'Gently massage onto wrists and neck; absorbs in seconds.' },
    { num: '3', title: 'Nourish & Radiate', desc: 'Enjoy hydrated skin and lingering signature scent for up to 12 hours.' },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 dark:text-brand-50">How It Works</h2>
          <p className="text-brand-800/70 dark:text-brand-200/70 mt-3">Three simple steps to hydrated, beautifully scented skin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center p-6 bg-white dark:bg-brand-800/30 rounded-2xl border border-brand-200/40 dark:border-brand-700/50">
              <div className="w-16 h-16 bg-brand-800 dark:bg-brand-200 text-white dark:text-[#2A1D16] font-serif text-2xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                {step.num}
              </div>
              <h3 className="font-serif text-xl text-brand-900 dark:text-brand-100 mb-2">{step.title}</h3>
              <p className="text-brand-800/70 dark:text-brand-200/70 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}