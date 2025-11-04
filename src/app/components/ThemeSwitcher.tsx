'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  // Theme initialization logic (remains the same)
  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme 
      ? (savedTheme as 'light' | 'dark') 
      : (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);

    if (initialTheme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark'); 
      html.classList.add('light'); 
    }
  }, []);

  // Function to handle the actual theme change (remains the same)
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    const html = document.documentElement;

    if (newTheme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  };

  if (theme === null) {
    return <div className="w-16 h-8"></div>; // Updated placeholder width
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      // UPDATED: Changed w-14 to w-16
      className="relative flex items-center w-16 h-8 p-1 rounded-full cursor-pointer 
                 bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
    >
      {/* Background icons (Icon visibility logic remains the same) */}
      <div className="absolute w-full flex justify-between items-center px-1">
        
        {/* SUN ICON: Hidden in light mode, visible in dark mode */}
        <Sun 
          className={`h-5 w-5 text-yellow-500 transition-opacity duration-300 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0' 
          }`} 
        />
        
        {/* MOON ICON: Visible in light mode, hidden in dark mode */}
        <Moon 
          className={`h-5 w-5 mr-1 text-gray-400 transition-opacity duration-300 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0' 
          }`} 
        />
      </div>

      {/* The sliding circle (the 'thumb') */}
      <div
        className={`w-6 h-6 rounded-full shadow-md 
                    transform transition-transform duration-300 ease-in-out
                    ${theme === 'dark' 
                      ? 'translate-x-8 bg-brand-secondary' // UPDATED: translate-x-6 to translate-x-8
                      : 'translate-x-0 bg-brand-primary'
                    }`}
      >
        {/* Icon inside the thumb */}
        <div className="flex items-center justify-center w-full h-full text-white">
          {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
        </div>
      </div>
    </button>
  );
}