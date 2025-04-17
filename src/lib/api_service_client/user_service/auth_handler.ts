import { FormValues, LoginValues } from "@/src/type/validation_type/formTypes"
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


export const loginUserApi = async(userData:LoginValues)=>{

    try{

       const loginUserAPi = await axiosClient.post('/login',{userData})
     
       return {status:loginUserAPi.data.status,
               message:loginUserAPi.data.message,
               statusCode:loginUserAPi.status
       }

       

    }catch(error){

        console.log("error occured in loginUserApi",error)

        return {status:false,message:"error occured"}

    }
}

