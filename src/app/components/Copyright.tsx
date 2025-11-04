'use client';

import { useState, useEffect } from 'react';

// Define the props interface
interface CopyrightProps {
    ownerName: string;
}

// REMOVED 'async'
export default function Copyright({ ownerName }: CopyrightProps) {
  
  // 1. Initialize state with null or a placeholder
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // 2. Run the dynamic code ONLY after the component mounts (on the client)
  useEffect(() => {
    // This part remains client-side to get the user's current year.
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <span className="w-full text-center mt-2 text-gray-500 text-sm">
      {/* Renders the passed prop and the dynamic year */}
      &copy; {currentYear ? currentYear : '...'} {ownerName}
    </span>
  );
}