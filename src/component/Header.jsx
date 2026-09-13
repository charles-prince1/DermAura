import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, setCartCount, cartCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky w-full top-0 z-40 bg-brand-50/90 dark:bg-brand-900/90 backdrop-blur-md border-b border-brand-200/50 dark:border-brand-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="font-serif text-2xl tracking-wider font-bold text-brand-900 dark:text-brand-50">
         DermaAura
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-brand-900 dark:text-brand-100">
          <a href="#features" className="hover:text-brand-500 transition">Skin Benefits</a>
          <a href="#about" className="hover:text-brand-500 transition">Our Science</a>
          <a href="#how-it-works" className="hover:text-brand-500 transition">How It Works</a>
          <a href="#solutions" className="hover:text-brand-500 transition">Solutions</a>
          <a href="#pricing" className="hover:text-brand-500 transition">Shop & Pricing</a>
          <a href="#faq" className="hover:text-brand-500 transition">FAQ</a>
        </div>

        {/* Action Icons & CTA */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="p-2 text-brand-900 dark:text-brand-100 hover:text-brand-500 transition rounded-full"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5" />}
          </button>

          <button aria-label="Search" className="p-2 text-brand-900 dark:text-brand-100 hover:text-brand-500 transition">
            <Search className="w-5 h-5" />
          </button>
          
          <button aria-label="Cart" className="p-2 text-brand-900 dark:text-brand-100 hover:text-brand-500 transition relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-brand-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <a href="#pricing" className="hidden sm:inline-block hover:text-[#2A1D16]  bg-[#2A1D16]  dark:bg-brand-50 text-white dark:text-brand-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-900 dark:hover:bg-white transition shadow-sm">
            Shop Now
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden p-2 text-brand-900 dark:text-brand-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-50 dark:bg-brand-900 border-b border-brand-200 dark:border-brand-800 px-4 pt-2 pb-6 space-y-3 font-medium">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-brand-900 dark:text-brand-100">Skin Benefits</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-brand-900 dark:text-brand-100">Our Science</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-brand-900 dark:text-brand-100">How It Works</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-brand-900 dark:text-brand-100">Solutions</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-brand-900 dark:text-brand-100">Shop & Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-brand-900 dark:text-brand-100">FAQ</a>
        </div>
      )}
    </nav>
  );
}