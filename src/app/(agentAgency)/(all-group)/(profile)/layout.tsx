
import "../../../globals.css"

import { Inter } from 'next/font/google'

import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })


const Profile_side_layout=async({children}:{children:React.ReactNode})=>{

    
  
   
    return (
    
         <div
        className={inter.className}
      >
        <div><Toaster /></div>
       
            {children}
        
        </div>
    
    )
}


export default Profile_side_layout