import  "../globals.css"

import { Inter } from 'next/font/google'
import React from "react"

const inter = Inter({ subsets: ['latin'] })


const Agent_side_layout=({children}:{children:React.ReactNode})=>{
   
    return (
    
         <div
        className={inter.className}
      >
       
            {children}
        
        </div>
    
    )
}


export default Agent_side_layout