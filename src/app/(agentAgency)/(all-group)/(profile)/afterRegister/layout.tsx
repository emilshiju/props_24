


import { checkProfileVerification } from "@/src/lib/api_service_server/user_service/area_handler";
import { redirect } from "next/navigation";



const AfterRegister_side_layout=async({children}:{children:React.ReactNode})=>{

  

   const ress = await checkProfileVerification()


    if(ress.status=='not_verified'){
          
        redirect('/verification')
          
    }else if(ress.status=='success'){
             
        redirect('/featured/add')

    }else if(ress.status=='not_found'){
          
        redirect('/createProfile')
          
    }


   
    return (
    
         <div
        
      >
        
       
            {children}
        
        </div>
    
    )
}


export default AfterRegister_side_layout

