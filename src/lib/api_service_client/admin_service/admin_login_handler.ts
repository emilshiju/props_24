import { AdminLoginValues } from "@/src/type/validation_type/formTypes"
import axiosClient from "../../axios_client"


export const adminLoginApi =async(data:AdminLoginValues)=>{

    try{

        const resAdminLoginApi = await axiosClient.post('/adminLogin',data)

        return 



    }catch(error){

        console.log("admin login api error",error)

        return 
    }
}