import React from 'react';
import Copyright from './Copyright';
import { getContentData } from '../utilities/content';
import type { FooterLink } from '@/types';

const GlobalFooter: React.FC = async () => {
    
    let ownerName = 'Elijah Luttrell';
    let links: FooterLink[] = [];

    try {
        const data = await getContentData();
        ownerName = data.profile.name;
        links = data.footerLinks as FooterLink[];
    } catch (error) {
        console.error("Could not fetch footer data.", error);
    }

    return (
        <footer className="mt-auto p-8 sm:p-20 flex gap-[24px] flex-wrap items-center justify-center 
                       text-gray-500 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-gray-800">
            
            {links.map((link, index) => (
                <React.Fragment key={link.label}>
                    <a 
                        href={link.href} 
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="hover:text-brand-primary dark:hover:text-brand-secondary transition"
                    >
                        {link.label}
                    </a>
                    
                    {index < links.length - 1 && <span>•</span>}
                </React.Fragment>
            ))}

            <Copyright ownerName={ownerName} /> 
        </footer>
    );
};

export default GlobalFooter;