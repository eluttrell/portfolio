// components/GlobalHeader.tsx
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { getContentData } from '../utilities/content';
import type { NavigationLink } from '@/types';

// Convert to an async function (Async Server Component)
const GlobalHeader: React.FC = async () => {
  // Fetch data right before rendering
  const data = await getContentData();
  const { profile, navigation, projects } = data;

  // Filter out Projects link if no projects exist
  const filteredNavigation = navigation.filter((link: NavigationLink) => {
    if (link.label === 'Projects') {
      return projects && projects.length > 0;
    }
    return true;
  });
  
  // NOTE: navigation data is assumed to be structured:
  // "navigation": [
  //   { "label": "Projects", "href": "/projects", "external": false },
  //   { "label": "Resume", "href": "/Resume 2025.pdf", "external": true },
  //   { "label": "Contact", "href": "mailto:...", "external": false }
  // ]

  return (
    <header className="sticky top-0 z-50 
                       bg-white/95 dark:bg-gray-900/95 
                       backdrop-blur-sm 
                       w-full"> 
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 
                        flex justify-between items-center">
            
            {/* Logo/Name Link - uses fetched profile name */}
            <a href="/" 
               className="text-xl font-bold tracking-tight 
                          text-gray-900 dark:text-gray-100 
                          hover:text-brand-primary dark:hover:text-brand-secondary transition">
              {profile.name}
            </a>
            
            {/* Navigation Links - mapped from API data */}
            <nav className="flex items-center space-x-6">
              {filteredNavigation.map((link: NavigationLink) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary transition font-medium"
                >
                  {link.label}
                </a>
              ))}
              
              <ThemeSwitcher />
            </nav>
        </div>
    </header>
  );
};

export default GlobalHeader;