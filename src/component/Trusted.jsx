import React from 'react';

export default function TrustedBy() {
  return (
    <section className="py-10 border-y border-brand-200/60 dark:border-brand-800/60 bg-white/40 dark:bg-brand-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-800/50 dark:text-brand-200/50 mb-6">
          Featured In & Dermatologist Certified
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300 text-brand-900 dark:text-brand-100">
          <span className="font-serif text-xl tracking-widest font-bold">VOGUE</span>
          <span className="font-sans text-lg tracking-tighter font-black">ELLE</span>
          <span className="font-serif text-lg italic">Cosmopolitan</span>
          <span className="font-sans text-base font-semibold tracking-wide">DERM APPROVED</span>
          <span className="font-serif text-lg font-bold">ALLURE</span>
        </div>
      </div>
    </section>
  );
}