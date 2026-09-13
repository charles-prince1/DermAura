import React from 'react';
import { useTheme } from '../ThemeProvider.jsx'; // 1. Import the custom hook

export default function ThemeToggle() {
  // 2. Extract values from context
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border font-medium transition-colors duration-200
                 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      {/* Remember: true = Light Mode, false = Dark Mode */}
      {isLightMode ? "☀️ Switch to Dark" : "🌙 Switch to Light"}
    </button>
  );
}