"use client"
import { profileExistsApi } from "@/src/lib/api_service_client/agent_agencies_service/protected_handler"
import  "../../globals.css"

import { Inter } from 'next/font/google'
import React, { useEffect ,useState} from "react"
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })


const Agent_side_layout=({children}:{children:React.ReactNode})=>{


     const [loading, setLoading] = useState(false);


     const router = useRouter();
    
      const checkProfileExists=async()=>{
    
        const ress=await profileExistsApi()
        
    
        console.log("got resssssponseeeeeeeeeeeeeeeeeeeee")
        console.log(ress.data)
        if(ress.status){
          
          
            router.push('/featured/add')
          
        
        }else{
alert("error")
        }

        setLoading(true)
    
        
    
      }
    
      useEffect(()=>{
    
        // checkProfileExists()
    
      },[])
    
    
    //   if (!loading) {
    //     // Show loading spinner or blank while waiting for API
    //     return <div>Loading...</div>;
    //   }


   
    return (
    
         <div
        className={inter.className}
      >
       
            {children}
        
        </div>
    
    )
}


export default Agent_side_layout