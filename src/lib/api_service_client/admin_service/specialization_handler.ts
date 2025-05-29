import { specialisation_Type } from "@/src/type/api_type/admin_type"
import axiosClient from "../../axios_client"


export const addSpecializationApi=async(data:specialisation_Type)=>{

    try{

       const resAddSpecializationApi = await  axiosClient.post('/admin/specialization/add',data)

       return {
        status:resAddSpecializationApi.data.status,
        data:resAddSpecializationApi.data.message,
        statusCode:resAddSpecializationApi.status
       }


    }catch(error:any){
        console.log('errror occured in addSpecializationApi',error)

        return {
            status:false,
            data:error.response?.data?.message ||"something went wrong try again later"
        }
    }
}




export const listSpecializationApi=async()=>{

    try{

        const ress =await  axiosClient.get('/admin/specialization')

        return{
            status:ress.data.status,
            data:ress.data.message,
            statusCode:ress.status
        }

    }catch(error:any){
        console.log("error occrued in listSpecializationApi",error)

         return {
            status:false,
            data:error.response?.data?.message ||"something went wrong try again later"
        }

    }
}




export const deleteSpecializationApi=async(id:string)=>{

    try{

        const deleted = await axiosClient.delete(`/admin/specialization/${id}/delete`)

        return {
            status:deleted.data.status,
            data:deleted.data.message,
            statusCode:deleted.status
        }

    }catch(error:any){
        console.log("error occured in deleteSpecialization",error)

          return {
            status:false,
            data:error.response?.data?.message ||"something went wrong try again later"
        }


    }
}