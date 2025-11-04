// components/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

interface ContactFormProps {
  recipient: string; // Fetched email address passed from the server
}

export default function ContactForm({ recipient }: ContactFormProps) {
  // 1. State for form fields
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  // 2. Function to construct and open the mailto link
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Construct the mailto link using the passed recipient prop
    const mailtoLink = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
    >

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Let's connect about a project..."
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm 
                     focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      {/* Body Field */}
      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="body"
          rows={6}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Hi Elijah, I'm reaching out because..."
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm 
                     focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center items-center px-4 py-2 border border-transparent 
                   rounded-md shadow-sm text-base font-medium text-white cursor-pointer
                   bg-brand-primary hover:bg-brand-primary/90 focus:outline-none focus:ring-2 
                   focus:ring-offset-2 focus:ring-brand-primary transition duration-150"
      >
        <Send className="h-5 w-5 mr-2" />
        Open Email Client
      </button>
    </form>
  );
}