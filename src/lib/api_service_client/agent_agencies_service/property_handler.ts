import { PropertyType } from "@/src/type/validation_type/propertyType"
import axiosClient from "../../axios_client"




export const addPropertyApi=async(data:PropertyType,imageUrl:string)=>{


    try{

        const allData = {
            ...data,
             imageUrl
          }

          console.log("the full allData")
          console.log(allData)

        const resAddPropertyApi=await axiosClient.post('/agentAgencies/property/add',allData)


        return {
            status:resAddPropertyApi.data.status,
            data:resAddPropertyApi.data.message,
            statusCode:resAddPropertyApi.status
        }




    }catch(error){
        console.log("error occured in addProperty",error)
        
        return {
            status:false,
            data:"internal error"
        }
    }
}



export const listAllPropertyApi=async()=>{

    try{

        const resAllProperty=await axiosClient.get('/agentAgencies/property/list')


        return {
            status:resAllProperty.data.status,
            data:resAllProperty.data.message,
            statusCode:resAllProperty.status
        }

        
    }catch(error){
        console.log("error occured in listAllPropertyAPi")
        return {
            status:false,
            data:"internal error"
        }
    }
}