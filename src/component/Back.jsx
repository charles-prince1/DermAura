import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 p-3 bg-white dark:bg-brand-200 text-white dark:text-[#2A1D16] rounded-full shadow-xl hover:scale-110 transition duration-300"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}