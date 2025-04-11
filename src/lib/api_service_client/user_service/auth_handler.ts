import { FormValues } from "@/src/type/validation_type/formTypes"
import axiosClient from "../../axios_client"



export const registerUserApi=async(userDetails:FormValues)=>{

    try{

        const responseRegisterUsrApi = await axiosClient.post('/register',{userDetails})

        return {status:responseRegisterUsrApi.data.status,data:responseRegisterUsrApi.data,statusCode:responseRegisterUsrApi.status}


    }catch(error){

        console.log("error occur in registerUserApi",error)
        return {status:false,data:{message:"error occur in registration"}}
    }
}


