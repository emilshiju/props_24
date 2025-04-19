import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

// const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Props24 - The TripAdvisor for Real Estate Agents',
  description: 'Find and review the best real estate agents in your area',
  icons: {
    icon: '/images/Asset 7.svg',
    apple: '/images/Asset 7.svg',
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={inter.className}
      >
        <div className="min-h-screen bg-gray-50">
        <div><Toaster/></div>
        {children}
        </div>
      </body>
    </html>
  );
}
