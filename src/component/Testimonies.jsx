import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Finally, a luxury perfume line I can confidently recommend to patients with delicate or eczema-prone skin. It leaves skin glowing rather than irritated.",
    author: "Dr. Elena Rostova",
    role: "Board-Certified Dermatologist"
  },
  {
    quote: "I stopped wearing perfumes years ago because of skin redness. The Silk & Santal formula feels like a hydrating serum and smells divine all day.",
    author: "Sarah Mitchell",
    role: "Verified Buyer"
  },
  {
    quote: "The Discovery Set was the best beauty purchase I made this year. The oil base keeps my wrists so soft and the longevity is incredible.",
    author: "Marcus Vance",
    role: "Verified Buyer"
  }
];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  useEffect(()=>{
  
    const intervalID = setInterval(()=>{
     next()
    }, 10000)

  return() => clearInterval(intervalID)
},[])
  return (
    <section className="py-20 bg-white dark:bg-brand-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-900 dark:text-brand-50">Loved by Dermatologists & Perfume Lovers</h2>
        </div>

        {/* Carousel Display */}
        <div className="max-w-3xl mx-auto relative bg-brand-50 dark:bg-brand-800/40 p-8 sm:p-12 rounded-3xl border border-brand-200/50 dark:border-brand-700 shadow-sm">
          <div className="flex text-amber-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-brand-800/90 dark:text-brand-100 text-lg sm:text-xl italic font-serif leading-relaxed mb-8">
            "{testimonials[currentIndex].quote}"
          </p>
          <div>
            <p className="font-semibold text-brand-900 dark:text-brand-50 text-base">{testimonials[currentIndex].author}</p>
            <p className="text-xs text-brand-800/60 dark:text-brand-200/60">{testimonials[currentIndex].role}</p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex space-x-3 absolute bottom-8 right-8">
            <button onClick={prev} aria-label="Previous Testimonial" className="p-2.5 rounded-full bg-white dark:bg-brand-700 border border-brand-200 dark:border-brand-600 hover:bg-brand-100 transition">
              <ChevronLeft className="w-4 h-4 text-brand-900 dark:text-brand-100" />
            </button>
            <button onClick={next} aria-label="Next Testimonial" className="p-2.5 rounded-full bg-white dark:bg-brand-700 border border-brand-200 dark:border-brand-600 hover:bg-brand-100 transition">
              <ChevronRight className="w-4 h-4 text-brand-900 dark:text-brand-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}