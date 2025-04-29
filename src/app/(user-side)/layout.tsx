
import  "../globals.css"
import Footer from "@/src/components/user/footer"
import Header from "@/src/components/user/header"
import { Inter } from 'next/font/google'
import React from "react"

const inter = Inter({ subsets: ['latin'] })


const User_side_layout=({children}:{children:React.ReactNode})=>{
   
    return (
    
         <div
        className={inter.className}
      >
        <Header />
            {children}
        <Footer/>
        </div>
    
    )
}


export default User_side_layout