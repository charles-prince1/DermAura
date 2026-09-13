// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="bg-[#2A1D16] text-white py-16 border-t border-[#4A3427]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
//           <div className="space-y-4">
//             <a href="#" className="font-serif text-2xl tracking-wider font-bold text-white">
//               SmoothSkin<span className="text-[#A37252] font-normal">.Care</span>
//             </a>
//             <p className="text-[#E8DDD3]/60 text-xs leading-relaxed">
//               Redefining fine luxury fragrance through dermatologist-backed, alcohol-free skin health formulations.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-[#E8DDD3]">Shop</h4>
//             <ul className="space-y-2 text-xs text-[#E8DDD3]/70">
//               <li><a href="#products" className="hover:text-white transition">Discovery Set</a></li>
//               <li><a href="#products" className="hover:text-white transition">Botanical Oils</a></li>
//               <li><a href="#products" className="hover:text-white transition">Scent Serums</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-[#E8DDD3]">Company</h4>
//             <ul className="space-y-2 text-xs text-[#E8DDD3]/70">
//               <li><a href="#about" className="hover:text-white transition">Our Science</a></li>
//               <li><a href="#features" className="hover:text-white transition">Clean Standards</a></li>
//               <li><a href="#faq" className="hover:text-white transition">Help & FAQ</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-[#E8DDD3]">Stay Connected</h4>
//             <p className="text-xs text-[#E8DDD3]/70 mb-3">Subscribe to receive 15% off your first order.</p>
//             <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
//               <input 
//                 type="email" 
//                 placeholder="Your email address" 
//                 className="bg-[#4A3427]/80 text-white text-xs px-3 py-2 rounded-l-md focus:outline-none w-full"
//               />
//               <button type="submit" className="bg-[#A37252] text-white text-xs px-4 py-2 rounded-r-md font-medium hover:bg-[#8C5B3E] transition">
//                 Join
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="pt-8 border-t border-[#4A3427]/80 flex flex-col sm:flex-row justify-between items-center text-xs text-[#E8DDD3]/40 space-y-4 sm:space-y-0">
//           <p>&copy; {new Date().getFullYear()} SmoothSkin Care Inc. All rights reserved.</p>
//           <div className="flex space-x-6">
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//             <a href="#" class="hover:text-white">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('Thank you for subscribing! 15% discount code sent.');
    setEmail('');
  };

  return (
    <footer className="bg-brand-900 text-white bg-[#2A1D16] py-16 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <a href="#" className="font-serif text-2xl tracking-wider font-bold text-white">
              DermaAura
            </a>
            <p className="text-brand-200/60 text-xs leading-relaxed">
              Redefining luxury fine fragrances through dermatologist-backed, alcohol-free formulations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-brand-200">Shop</h4>
            <ul className="space-y-2 text-xs text-brand-200/70">
              <li><a href="#pricing" className="hover:text-white transition">Discovery Set</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Botanical Oils</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Scent Serums</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-brand-200">Company</h4>
            <ul className="space-y-2 text-xs text-brand-200/70">
              <li><a href="#about" className="hover:text-white transition">Our Science</a></li>
              <li><a href="#features" className="hover:text-white transition">Clean Standards</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-brand-200">Newsletter</h4>
            <p className="text-xs text-brand-200/70 mb-3">Subscribe for 15% off your first order.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="bg-brand-800 text-white text-xs px-3 py-2 rounded-l-md focus:outline-none w-full border border-brand-700"
                />
                <button type="submit" className="bg-brand-500 text-white text-xs px-4 py-2 rounded-r-md font-medium hover:bg-brand-600 transition">Join</button>
              </div>
              {message && <p className="text-[11px] text-amber-300">{message}</p>}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-brand-200/40 space-y-4 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} DermaAura Care Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}