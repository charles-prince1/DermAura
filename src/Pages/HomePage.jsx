import React, { useState, useEffect } from 'react';
import Navbar from '../component/Header';
import Hero from '../component/Hero';
import TrustedBy from '../component/Trusted';
import Features from '../component/Features';
import AboutProduct from '../component/About';
import HowItWorks from '../component/HowItWork';
import Statistics from '../component/Statistics';
import Solutions from '../component/Soln';
import Testimonials from '../component/Testimonies';
import Pricing from '../component/price';
import FAQ from '../component/Accordian';
import FinalCTA from '../component/Finalcta';
import Footer from '../component/Footer';
import DemoModal from '../component/Demo';
import BackToTop from '../component/Back';
import Product from '../component/Products';
import { useTheme } from "../context/ThemeProvider";
import { UseCart } from '../context/CartProvider';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { cartAlert } = UseCart();
  const { isLightMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`relative bg-brand-50 ${isLightMode ? "bg-brand-50" : "dark:bg-black"} text-brand-900 dark:text-brand-50 font-sans antialiased min-h-screen transition-colors duration-300`}>
      
      {/* Inline DOM Alert Banner */}
      {cartAlert && (
        <div className="fixed top-25 right-5 z-[100] bg-[#2A1D16]  text-white px-4 py-3 rounded-lg shadow-xl border border-brand-500 animate-fade-in-down max-w-sm">
          <p className="text-sm font-medium">{cartAlert}</p>
        </div>
      )}

      {/* <Navbar /> */}
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <TrustedBy />
        <Features />
        <AboutProduct />
        <Product />
        <HowItWorks />
        <Statistics />
        <Solutions />
        <Testimonials />
        <Pricing onAddToCart={() => setCartCount(c => c + 1)} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <BackToTop />
    </div>
  );
}
