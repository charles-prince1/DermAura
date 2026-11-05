import React from 'react';
import { useTheme } from '../context/ThemeProvider';
export default function HowItWorks() {
  const steps = [
    { num: '1', title: 'Select Your Scent', desc: 'Choose from our botanical blends or take our skin-matching quiz.' },
    { num: '2', title: 'Apply to Pulse Points', desc: 'Gently massage onto wrists and neck; absorbs in seconds.' },
    { num: '3', title: 'Nourish & Radiate', desc: 'Enjoy hydrated skin and lingering signature scent for up to 12 hours.' },
  ];

  const {isLightMode} = useTheme()
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`font-serif text-3xl sm:text-4xl  ${isLightMode?"text-brand-900":" dark:text-brand-50"}`}>How It Works</h2>
          <p className={` mt-3 ${isLightMode?"text-brand-800/70":" dark:text-brand-200/70"}`}>Three simple steps to hydrated, beautifully scented skin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className={`text-center p-6   rounded-2xl border ${isLightMode?"bg-white border-brand-500/40":"dark:bg-brand-800/30  dark:border-brand-700/50"}`}>
              <div className={`w-16 h-16 font-serif text-2xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-md ${isLightMode?" bg-brand-800  text-white ":"dark:text-brand-600 dark:bg-brand-200"}`}>
                {step.num}
              </div>
              <h3 className={`font-serif text-xl mb-2 ${isLightMode?"text-brand-900":"  dark:text-brand-100"}`}>{step.title}</h3>
              <p className={` text-sm leading-relaxed ${isLightMode?"text-brand-800/70":" dark:text-brand-200/70"}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}