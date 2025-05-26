"use client"
import { profileExistsApi } from "@/src/lib/api_service_client/agent_agencies_service/protected_handler"
import  "../../globals.css"

import { Inter } from 'next/font/google'
import React, { useEffect ,useState} from "react"
import { useRouter } from 'next/navigation';
import Loader from "@/src/components/loader"
import toast from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })


const Agent_side_layout=({children}:{children:React.ReactNode})=>{


     const [loading, setLoading] = useState(false);


     const router = useRouter();
    
      const checkProfileExists=async()=>{
    
        const ress=await profileExistsApi()
      

        if(ress.status){
          
            router.push('/featured/add')
        
        }else{
          
          if(ress.statusCode==200){
            router.push('/createProfile')
          }
          // else{
          //   toast.error(ress.data)
          // }
          
        }

        setLoading(true)
    
        
    
      }
    
      useEffect(()=>{
    
        checkProfileExists()
    
      },[])
    
    
      if (!loading) {
     
        return <div><Loader/></div>;
      }


   
    return (
    
         <div
        className={inter.className}
      >
       
            {children}
        
        </div>
    
    )
}


export default Agent_side_layout