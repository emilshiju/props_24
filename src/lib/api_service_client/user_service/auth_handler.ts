import { FormValues } from "@/src/type/validation_type/formTypes"
import axiosClient from "../../axios_client"



export const registerUserApi=async(UserDetails:FormValues)=>{

    try{

        const responseRegisterUsrApi = await axiosClient.post('/register',{UserDetails})
        

    }catch(error){

        console.log("error occur in registerUserApi",error)
    }
}


