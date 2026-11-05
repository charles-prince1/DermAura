import React from 'react';
import {useTheme} from "../context/ThemeProvider"
export default function FinalCTA() {
  const {isLightMode} = useTheme()
  return (
    <section className={`py-20 ${isLightMode ? "bg-brand-200/40":"dark:bg-brand-800/50"}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className={`font-serif text-3xl sm:text-5xl  ${isLightMode?" text-brand-900":"dark:text-brand-50"}`}>Ready to Experience Skin-First Perfumery?</h2>
        <p className={` text-lg max-w-xl mx-auto ${isLightMode?"text-brand-800/80":" dark:text-brand-200/80"}`}>
          Match your unique skin type with your perfect botanical scent profile in under 60 seconds.
        </p>
        <div>
          <a href="#pricing" className={`inline-block px-9 py-4 rounded-full font-medium  transition shadow-lg ${isLightMode?"bg-brand-800    text-brand-100 hover:bg-brand-900":"dark:bg-brand-200  dark:text-brand-900 dark:hover:bg-brand-100 "}`}>
            Find Your Scent Match
          </a>
        </div>
      </div>
    </section>
  );
}