// import React from 'react';
// import { ArrowRight, ShieldCheck } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative py-16 lg:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <span className="inline-block bg-[#E8DDD3]/60 text-[#4A3427] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
//               Alcohol-Free • Skin-Safe Fragrance
//             </span>
//             <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#2A1D16]">
//               Nourish Your Skin. <br />
//               <span className="italic font-light text-[#A37252]">Elevate Your Scent.</span>
//             </h1>
//             <p className="text-[#4A3427]/80 text-lg max-w-lg leading-relaxed">
//               Experience luxury fine fragrances infused with hydrating squalane and jojoba oil. Designed specifically for sensitive skin, zero drying alcohol.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 pt-2">
//               <a href="#products" className="inline-flex justify-center items-center bg-[#4A3427] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2A1D16] transition shadow-lg">
//                 Shop Skin-Safe Scents
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </a>
//               <a href="#quiz" className="inline-flex justify-center items-center bg-white border border-[#E8DDD3] text-[#2A1D16] px-8 py-4 rounded-full font-medium hover:bg-[#F4EFEA] transition">
//                 Take Skin Quiz
//               </a>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-square rounded-3xl bg-gradient-to-tr from-[#E8DDD3] to-[#F4EFEA] p-8 shadow-2xl relative overflow-hidden flex items-center justify-center">
//               <img 
//                 src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800" 
//                 alt="SmoothSkin Perfume Bottle" 
//                 className="rounded-2xl object-cover h-full w-full shadow-md"
//               />
//             </div>
//             <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#E8DDD3]/50 shadow-xl hidden sm:flex items-center space-x-3">
//               <div className="p-3 bg-[#F4EFEA] rounded-xl text-[#8C5B3E]">
//                 <ShieldCheck className="w-6 h-6" />
//               </div>
//               <div>
//                 <p className="text-xs text-[#4A3427]/60 font-medium">Dermatologist Tested</p>
//                 <p class="text-sm font-semibold text-[#2A1D16]">100% Safe for Sensitive Skin</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { ArrowRight, ShieldCheck, Play } from 'lucide-react';
import {Link} from "react-router-dom"
export default function Hero({ onOpenModal }) {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-brand-200/60 dark:bg-brand-800/80 text-brand-800 dark:text-brand-200 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
              Alcohol-Free • Skin-Safe Fragrance
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-brand-900 dark:text-brand-50">
              Nourish Your Skin. <br />
              <span className="italic font-light text-brand-500">Elevate Your Scent.</span>
            </h1>
            <p className="text-brand-800/80 dark:text-brand-200/80 text-lg max-w-lg leading-relaxed">
              Experience luxury fine fragrances infused with hydrating squalane and jojoba oil. Designed specifically for sensitive skin, zero drying alcohol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#pricing" className="inline-flex justify-center items-center bg-gray-400 dark:bg-brand-200 text-white dark:text-[#2A1D16] px-8 py-4 rounded-full font-medium hover:bg-brand-900 dark:hover:bg-white transition shadow-lg group">
                Shop Skin-Safe Scents
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={onOpenModal} 
                className="inline-flex justify-center items-center bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-700 text-brand-900 dark:text-brand-100 px-8 py-4 rounded-full font-medium hover:bg-brand-100 dark:hover:bg-brand-700 transition"
              >
                <Play className="w-4 h-4 mr-2 fill-current text-brand-500" /> Watch Science Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-brand-200 to-brand-100 dark:from-brand-800 dark:to-brand-900 p-8 shadow-2xl relative overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800" 
                alt="SmoothSkin Care Perfume Bottle" 
                className="rounded-2xl object-cover h-full w-full shadow-md transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-brand-900/90 backdrop-blur-md p-4 rounded-2xl border border-brand-200/50 dark:border-brand-800 shadow-xl hidden sm:flex items-center space-x-3">
              <div className="p-3 bg-brand-100 dark:bg-brand-800 rounded-xl text-brand-600 dark:text-brand-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-800/60 dark:text-brand-200/60 font-medium">Dermatologist Tested</p>
                <p className="text-sm font-semibold text-brand-900 dark:text-brand-100">100% Safe for Sensitive Skin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}