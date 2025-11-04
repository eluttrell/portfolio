// app/contact/page.tsx (ASYNC SERVER COMPONENT)

import React from 'react';
import { Metadata } from 'next';
import { getContentData } from '../utilities/content'; // Import your API fetcher
import ContactForm from '../components/ContactForm'; // Import the new Client Component

export const metadata: Metadata = {
  title: "Elijah Luttrell | Contact",
  description: "Contact Elijah Luttrell via a pre-filled email form.",
};

export default async function ContactPage() {
    
    // --- SERVER-SIDE DATA FETCH ---
    let contactEmail = 'contact@fallback.com'; // Provide a fallback in case of API failure
    
    try {
        const data = await getContentData();
        // Assume the email is available at data.profile.contactEmail
        contactEmail = data.profile.contactEmail; 
    } catch (error) {
        console.error("Failed to fetch contact email for ContactPage.", error);
    }
    // -----------------------------

    return (
        <div className="w-full max-w-xl mx-auto py-12 px-4 sm:px-0">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                    Get In Touch
                </h1>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                    Fill out the details below to open your preferred email client.
                </p>
            </header>

            {/* Pass the fetched email to the Client Component */}
            <ContactForm recipient={contactEmail} />
        </div>
    );
}