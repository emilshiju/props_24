import  "./globals.css"
// import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from "../components/errorBoundary";

// const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Props24 - The TripAdvisor for Real Estate Agents',
  description: 'Find and review the best real estate agents in your area',
  icons: {
    icon: '/images/24.svg',
    apple: '/images/24.svg',
  },
}



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    // <html lang="en"suppressHydrationWarning>
    <html lang="en" className="translated-ltr">
      <body
        // className={inter.className}
      >
        <ErrorBoundary>
        <div className="min-h-screen bg-gray-50">
        {/* <div><Toaster /></div> */}
        {children}
        </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
