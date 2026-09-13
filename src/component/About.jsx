// import React from 'react';

// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-[#F4EFEA]/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="grid grid-cols-2 gap-4">
//             <img 
//               src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=600" 
//               alt="Serum application" 
//               className="rounded-2xl shadow-sm object-cover h-64 w-full"
//             />
//             <img 
//               src="https://images.unsplash.com/photo-1608248597263-0057e57b4522?auto=format&fit=crop&q=80&w=600" 
//               alt="Botanical ingredients" 
//               className="rounded-2xl shadow-sm object-cover h-64 w-full mt-8"
//             />
//           </div>
//           <div className="space-y-6">
//             <span className="text-[#A37252] font-semibold text-sm tracking-wider uppercase">Bridging Skincare & Perfumery</span>
//             <h2 className="font-serif text-3xl sm:text-4xl text-[#2A1D16]">Fragrance Should Never Compromise Skin Health</h2>
//             <p className="text-[#4A3427]/80 leading-relaxed">
//               SmoothSkin Care was founded by dermatologists and master perfumers who recognized a common flaw in modern beauty: standard perfumes dry out the skin, cause redness, and disrupt your natural barrier.
//             </p>
//             <p className="text-[#4A3427]/80 leading-relaxed">
//               We replaced harsh ethanol bases with rich, fast-absorbing botanical oils. The result is a fine fragrance serum that moisturizes upon application while wrapping you in an enduring, sophisticated olfactory aura.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';

export default function AboutProduct() {
  return (
    <section id="about" className="py-20 bg-brand-100/50 dark:bg-brand-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=600" alt="Serum application" className="rounded-2xl shadow-sm object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1608248597263-0057e57b4522?auto=format&fit=crop&q=80&w=600" alt="Botanical ingredients" className="rounded-2xl shadow-sm object-cover h-64 w-full mt-8" />
          </div>
          <div className="space-y-6">
            <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">Bridging Skincare & Perfumery</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 dark:text-brand-50">Fragrance Should Never Compromise Skin Health</h2>
            <p className="text-brand-800/80 dark:text-brand-200/80 leading-relaxed">
              DermaAura was founded by dermatologists and master perfumers who recognized a common flaw in modern beauty: standard perfumes dry out the skin, cause redness, and disrupt your natural barrier.
            </p>
            <p className="text-brand-800/80 dark:text-brand-200/80 leading-relaxed">
              We replaced harsh ethanol bases with rich, fast-absorbing botanical oils. The result is a fine fragrance serum that moisturizes upon application while wrapping you in an enduring, sophisticated olfactory aura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}