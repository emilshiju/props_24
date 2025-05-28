import { FormValues, LoginValues } from "@/src/type/validation_type/formTypes"
import axiosClient from "../../axios_client"



export const registerUserApi=async(userDetails:FormValues)=>{

    try{

        const responseRegisterUsrApi = await axiosClient.post('/register',{userDetails})

        return {status:responseRegisterUsrApi.data.status,data:responseRegisterUsrApi.data,statusCode:responseRegisterUsrApi.status}


    }catch(error:any){

        return {
            status:false,
            data: error?.response?.data?.message ?? "something went wrong ",
        }
    }
}



export const loginUserApi = async(userData:LoginValues)=>{

    try{

       const loginUserAPi = await axiosClient.post('/login',{userData})
     
       return {status:loginUserAPi.data.status,
               data:loginUserAPi.data.message,
               statusCode:loginUserAPi.status
       }

       

    }catch (error: any) {
        
        console.log("error occurred in loginUserApi:", error);

        const errorMessage = error.response?.data?.message 
            || error.message 
            || "Something went wrong. Please try again.";

        return { status: false, data: errorMessage };

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
            data:error.response?.data?.message || "something went wrong"
        }
    }
}



export const logoutApi=async()=>{

    try{


        const ress=await axiosClient.get('/logout')

       return {
        status:ress.data.status,
        data:ress.data.message,
        statusCode:ress.status
       }


    }catch(error:any){
        console.log("error occured in the logoutApi",error)
         return {
            status:false,
            data:error.response?.data?.message || "internal server error"
        }

    }
}