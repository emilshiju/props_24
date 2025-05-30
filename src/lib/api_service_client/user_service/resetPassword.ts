import { confirmEmailValues } from "@/src/type/validation_type/formTypes"
import axiosClient from "../../axios_client"



export const confirmEmailApi=async(data:confirmEmailValues)=>{
    try{
        const ress=await axiosClient.post('/resetPassword/verify')
        
          return {
            status:ress.data.status,
            data:ress.data.message,
            statusCode:ress.status
        }

    }catch(error:any){
        console.log("error occured in teh confirmEmail",error)

         return {
            status:false,
            data: error?.response?.data?.message ?? "something went wrong ",
        }
    }
}