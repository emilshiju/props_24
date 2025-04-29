
import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/src/context/agentAgency/theme_context';
import { SidebarProvider } from '@/src/context/agentAgency/sidebar_context';
import "../../../style/agentAgency/agentAgency.css"

const outfit = Outfit({
  subsets: ["latin"],
});


const AgentAndAgency=({children}:{children:React.ReactNode})=>{
    return (

        <div className={`${outfit.className} `}>

            <ThemeProvider>
                      <SidebarProvider>{children}</SidebarProvider>
                    </ThemeProvider>

        </div>
    )
}

export default AgentAndAgency