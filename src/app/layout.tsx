import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elijah Luttrell",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*
          MAIN LAYOUT WRAPPER
          - flex flex-col min-h-screen ensures the sticky header is at the top
            and the footer is pushed to the bottom.
        */}
        <div className="font-sans flex flex-col min-h-screen"> 
          
          <GlobalHeader /> 

          {/* MAIN ELEMENT WRAPPER
            - flex-grow ensures it takes up all available space.
            - pt-16 is the critical fix to prevent sticky header overlap.
          */}
          <main className="flex-grow pt-16 max-w-7xl mx-auto w-full p-4 sm:p-8">
            {children}
          </main>

          <GlobalFooter />
        </div>
      </body>
    </html>
  );
}