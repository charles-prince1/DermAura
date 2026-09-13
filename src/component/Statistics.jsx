import React, { useState, useEffect } from 'react';

export default function Statistics() {
  const [counts, setCounts] = useState({ hydration: 0, hours: 0, customers: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        hydration: Math.min(Math.round((98 / steps) * step), 98),
        hours: Math.min(Math.round((12 / steps) * step), 12),
        customers: Math.min(Math.round((15000 / steps) * step), 15000),
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-brand-100 dark:bg-xl bg-[#2A1D16] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <p className="font-serif text-4xl sm:text-5xl font-light text-brand-200">{counts.hydration}%</p>
            <p className="text-xs sm:text-sm text-brand-200/80 mt-2 uppercase tracking-wider">Reported Hydrated Skin</p>
          </div>
          <div className="p-4">
            <p className="font-serif text-4xl sm:text-5xl font-light text-brand-200">0%</p>
            <p className="text-xs sm:text-sm text-brand-200/80 mt-2 uppercase tracking-wider">Drying Alcohol</p>
          </div>
          <div className="p-4">
            <p className="font-serif text-4xl sm:text-5xl font-light text-brand-200">{counts.hours} hrs</p>
            <p className="text-xs sm:text-sm text-brand-200/80 mt-2 uppercase tracking-wider">Scent Longevity</p>
          </div>
          <div className="p-4">
            <p className="font-serif text-4xl sm:text-5xl font-light text-brand-200">{counts.customers.toLocaleString()}+</p>
            <p className="text-xs sm:text-sm text-brand-200/80 mt-2 uppercase tracking-wider">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}