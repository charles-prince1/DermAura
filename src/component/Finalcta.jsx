import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-brand-200/40 dark:bg-brand-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-5xl text-brand-900 dark:text-brand-50">Ready to Experience Skin-First Perfumery?</h2>
        <p className="text-brand-800/80 dark:text-brand-200/80 text-lg max-w-xl mx-auto">
          Match your unique skin type with your perfect botanical scent profile in under 60 seconds.
        </p>
        <div>
          <a href="#pricing" className="inline-block bg-brand-800 dark:bg-[#2A1D16] text-white dark:text-brand-900 px-9 py-4 rounded-full font-medium hover:bg-brand-900 dark:hover:bg-white transition shadow-lg">
            Find Your Scent Match
          </a>
        </div>
      </div>
    </section>
  );
}