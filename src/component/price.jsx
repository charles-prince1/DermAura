import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing({ onAddToCart }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 dark:text-brand-50">Choose Your Scent Experience</h2>
          <p className="text-brand-800/70 dark:text-brand-200/70 mt-3">Start with a trial set or commit to daily hydrating fragrances.</p>
        </div>

        {/* Monthly / Annual Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-16 ">
          <span className={`text-sm ${!isAnnual ? 'font-bold text-brand-900 dark:text-brand-50' : 'text-brand-800/60 dark:text-brand-200/60'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 bg-brand-800 dark:bg-[#2A1D16] rounded-full p-1 transition-colors duration-300 relative"
            aria-label="Toggle Billing Frequency"
          >
            <div className={`w-6 h-6 bg-white dark:bg-brand-900 rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm ${isAnnual ? 'font-bold text-brand-900 dark:text-brand-50' : 'text-brand-800/60 dark:text-brand-200/60'}`}>
            Annual <span className="bg-brand-500 text-white text-[10px] px-2 py-0.5 rounded-full ml-1">Save 20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-white dark:bg-brand-800/30 p-8 rounded-3xl border border-brand-200/60 dark:border-brand-700 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-brand-900 dark:text-brand-100">Discovery Set</h3>
              <p className="text-xs text-brand-800/60 dark:text-brand-200/60 mt-1">Try before full size</p>
              <p className="text-4xl font-serif  dark:text-black my-6">{isAnnual ? '$20' : '$25'}</p>
              <ul className="space-y-3 text-sm text-brand-800/80 dark:text-brand-200/80 mb-8">
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> 5 x 2ml Serum Vials</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> $25 store credit voucher</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> Free shipping included</li>
              </ul>
            </div>
            <button onClick={onAddToCart} className="w-full hover:bg-[#2A1D16] hover:text-gray-200 font-medium py-3 rounded-full bg-gray-300 transition ">Order Discovery Set</button>
          </div>

          {/* Plan 2 Highlighted */}
          <div className="bg-brand-800 dark:bg-[#2A1D16] text-white p-8 rounded-3xl shadow-xl relative flex flex-col justify-between transform lg:-translate-y-2 border border-brand-700">
            <span className="absolute -top-3.5 right-8 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
            <div>
              <h3 className="font-serif text-2xl text-white">Full-Size Serum</h3>
              <p className="text-xs text-brand-200/60 mt-1">Single signature bottle</p>
              <p className="text-4xl font-serif text-white my-6">{isAnnual ? '$68' : '$85'}</p>
              <ul className="space-y-3 text-sm text-brand-200/90 mb-8">
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-200 mr-2" /> 50ml Hydrating Serum Perfume</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-200 mr-2" /> Choice of 6 signature scents</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-200 mr-2" /> Free matching sample vial</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-200 mr-2" /> 30-day money-back guarantee</li>
              </ul>
            </div>
            <button onClick={onAddToCart} className="w-full bg-white text-slate-900 font-medium py-3 rounded-full hover:bg-gray-300 transition">Shop Full-Size</button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white dark:bg-brand-800/30 p-8 rounded-3xl border border-brand-200/60 dark:border-brand-700 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-brand-900 dark:text-brand-100">VIP Scent Club</h3>
              <p className="text-xs text-brand-800/60 dark:text-brand-200/60 mt-1">Monthly replenishment</p>
              <p className="text-4xl font-serif text-brand-900 dark:text-brand-50 my-6">{isAnnual ? '$54' : '$68'} <span className="text-xs font-sans text-brand-800/50">/mo</span></p>
              <ul className="space-y-3 text-sm text-brand-800/80 dark:text-brand-200/80 mb-8">
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> Monthly custom 50ml Scent Serum</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> 20% off all additional store purchases</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> Free travel atomizers</li>
              </ul>
            </div>
            <button onClick={onAddToCart} className="w-full hover:bg-[#2A1D16]  text-brand-500 hover:text-gray-200 font-medium py-3 rounded-full bg-gray-300 transition ">Join Scent Club</button>
          </div>
        </div>
      </div>
    </section>
  );
}