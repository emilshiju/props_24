
import axios from "axios"
import axiosClient from "../../axios_client"
import { useId } from "react"




export const listAllUsersApi=async()=>{

    try{

        const reslistAllUsersApi = await axiosClient.get('admin/users/list_users')

        return {status:reslistAllUsersApi.data.status,
            data:reslistAllUsersApi.data.message,
            statusCode:reslistAllUsersApi.status}

        


    }catch(error:any){
        console.log("error occur in list  listAllUsersAPi ",error)

         return {
            status:false,
            data: error?.response?.data?.message ?? "something went wrong ",
        }
    }
}




export const getSingleUserDetailsApi=async(userId:string)=>{

    try{

        const resgetSingleUserDetailsApi = await axiosClient.get(`admin/users/userDetails/${userId}`)

      

        return {
            status:resgetSingleUserDetailsApi.data.status,
            data:resgetSingleUserDetailsApi.data.message,
            statusCode:resgetSingleUserDetailsApi.status
        }


    }catch(error:any){
        console.log("error occur in the api getsingle userdetails api",error)
        
        return {
            status:false,
            data: error?.response?.data?.message ?? "something went wrong ",
        }
    }
}




export const blockUserApi=async(userId:string)=>{



    try{

        const resBlockUserApi=await axiosClient.patch('/admin/block',{userId:userId})

        return {
            status:resBlockUserApi.data.status,
            data:resBlockUserApi.data.message,
            statusCode:resBlockUserApi.status
        }



    }catch(error:any){

        console.log("error occur in blockUserApi",error)

        return {
            status:false,
            data: error?.response?.data?.message ?? "something went wrong ",
        }
    }
}

export const unblockUserApi=async(userId:string)=>{

    try{

        const resUnBlockUserAPi=await axiosClient.patch('/admin/unblock',{userId:userId})

        return {
            status:resUnBlockUserAPi.data.status,
            data:resUnBlockUserAPi.data.message,
            statusCode:resUnBlockUserAPi.status
        }



    }catch(error:any){

        console.log("error occurin unblockUserAPi",error)
        
         return {
            status:false,
            data: error?.response?.data?.message ?? "something went wrong ",
        }
        
    }
}