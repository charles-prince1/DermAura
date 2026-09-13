import React from 'react';
import { Droplet, Sparkles, HeartPulse, Clock, Leaf, Award } from 'lucide-react';

const features = [
  { icon: Droplet, title: '100% Alcohol-Free', desc: 'Prevents natural skin moisture stripping and redness.' },
  { icon: Sparkles, title: 'Nutrient-Rich Base', desc: 'Infused with botanical Squalane, Jojoba Oil, and Vitamin E.' },
  { icon: HeartPulse, title: 'Dermatologist Tested', desc: 'Non-irritating, hypoallergenic, safe for eczema-prone skin.' },
  { icon: Clock, title: 'Sustained Release', desc: 'Micro-emulsion technology locks scent for up to 12 hours.' },
  { icon: Leaf, title: 'Hypoallergenic', desc: 'Free from parabens, phthalates, and synthetic dyes.' },
  { icon: Award, title: 'Cruelty-Free & Vegan', desc: '100% ethically harvested plant botanicals.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 dark:text-brand-50">Why Choose SmoothSkin Perfumes?</h2>
          <p className="text-brand-800/70 dark:text-brand-200/70 mt-3">Skincare science meets fine luxury perfumery.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="bg-white dark:bg-brand-800/40 p-8 rounded-2xl border border-brand-200/60 dark:border-brand-700 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-800 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-200 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-brand-900 dark:text-brand-100 mb-2">{item.title}</h3>
                <p className="text-brand-800/70 dark:text-brand-200/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}