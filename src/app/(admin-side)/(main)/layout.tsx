import { Outfit } from 'next/font/google';
// import "../../style/admin_style/admin.css"
import "@/src/style/admin_style/admin.css"

import { SidebarProvider } from '@/src/context/admin_context/sidebar_context';
import { ThemeProvider } from '@/src/context/admin_context/theme_context';




const outfit = Outfit({
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div className={`${outfit.className} `}>
        
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </div>
   
  );
}
