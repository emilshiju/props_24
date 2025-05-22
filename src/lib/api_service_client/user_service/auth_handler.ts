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
               data:loginUserAPi.data.message,
               statusCode:loginUserAPi.status
       }

       

    }catch(error:any){

        console.log("error occured in loginUserApi",error.response.data.message)

        return {status:false,data:error.response.data.message }

    }
}




export const checkEmailApi=async(data:string)=>{

    try{

        const ress=await axiosClient.post('/register/email',{email:data})

        return{
            status:ress.data.status,
            data:ress.data.message,
            statusCode:ress.data
        }


    }catch(error:any){
        console.log("error occuredin checkemail api route",error)

        return {
            status:false,
            data:error.response?.data?.message 
        }
    }
}