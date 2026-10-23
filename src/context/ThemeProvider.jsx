import { createContext, useContext, useState, useEffect } from "react";

// 1. Context object created with a distinct name
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 2. Initialize state using localStorage (true = Light, false = Dark)
  const [isLightMode, setIsLightMode] = useState(() => {
    // Prevent Errors during SSR (Server-Side Rendering)
    if (typeof window === "undefined") return true;

    // Check if the user has previously saved a theme in localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme !== null) {
      // If saved as "light", return true. If "dark", return false.
      return savedTheme === "light";
    }

    // FALLBACK: If no saved theme exists, check OS System Preference
    // (false if OS is dark, true if OS is light)
    return !window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 3. Whenever `isLightMode` changes:
  //    - Update localStorage
  //    - Update HTML document root class for Tailwind/CSS
  useEffect(() => {
    const root = document.documentElement;

    if (isLightMode) {
      // Light mode active
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // Dark mode active
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  // 4. Listen for OS theme changes (only affects users without a saved localStorage theme)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // Only auto-update if the user hasn't explicitly set a preference in localStorage
      if (localStorage.getItem("theme") === null) {
        setIsLightMode(!e.matches);
        console.log(isLightMode);
        
      }
    };
console.log(isLightMode);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // 5. Toggle Function (switches true <-> false)
  const toggleTheme = () => {
    setIsLightMode((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightMode,    // boolean: true = Light, false = Dark
        setIsLightMode, // direct state setter
        toggleTheme,    // helper toggle function
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to consume Context safely
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context; // Returns { isLightMode, setIsLightMode, toggleTheme }
};