import React from 'react';
import { X } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-brand-900 rounded-3xl max-w-2xl w-full p-6 relative shadow-2xl border border-brand-200 dark:border-brand-800">
        <button onClick={onClose} className="absolute bg-red-600/50 top-4 right-4 text-brand-800 dark:text-brand-200 hover:text-[#2A1D16] transition">
          <X className="w-6 h-6" />
        </button>
        <h3 className="font-serif text-2xl text-brand-900 dark:text-brand-50 mb-4">Inside DermaAura Science</h3>
        <div className="aspect-video bg-brand-100 dark:bg-brand-800 rounded-2xl flex items-center justify-center text-brand-800 dark:text-brand-200 text-sm">
          [ Video Stream: How Squalane binds perfume molecules to skin ]
        </div>
      </div>
    </div>
  );
}