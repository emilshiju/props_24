import { cityType } from "@/src/type/components_type/all_admin_type"
import axiosClient from "../../axios_client"


export const addCityApi=async(data:cityType)=>{

    try{

        const resAddCitieApi=await axiosClient.post('/admin/city/add',data)

        return {
            status:resAddCitieApi.data.status,
            data:resAddCitieApi.data.message,
            statusCode:resAddCitieApi.status
        }




    }catch(error:any){
        console.log("error occured in add cities api",error)

        return {
            status:false,
            data:error.response?.data?.message || "Internal server error",

        }

    }
}


export const listCityApi=async()=>{

    try{

        const resListCitieApi=await axiosClient.get('/admin/city/list')

        return {
            status:resListCitieApi.data.status,
            data:resListCitieApi.data.message,
            statusCode:resListCitieApi.status
        }

    }catch(error){
        console.log("error occured in listCitie",error)

        return {
            status:false,
            data:'error occured',
        }
    }
}



export const singleCityDisplayApi=async(cityId:string)=>{

    try{


       const resSingleCityDisplayApi = await  axiosClient.get(`/admin/city/${cityId}/detailedView`)

       return {
        status:resSingleCityDisplayApi.data.status,
        data:resSingleCityDisplayApi.data.message,
        statusCode:resSingleCityDisplayApi.status
       }



    }catch(error){
        console.log("erro roccur in the singleCityDisplayAPi",error)

        return {
            status:false,
            data:'error occured',
        }
    }
}




export const editCityApi=async(cityId:string,data:cityType)=>{

    try{

        const resEditCityApi=await axiosClient.post('/admin/city/edit',{id:cityId,data:data})

        return {
            status:resEditCityApi.data.status,
            data:resEditCityApi.data.message,
            statusCode:resEditCityApi.status
        }


    }catch(error){
        console.log("error ocured in editCitieApi",error)

        return {
            status:false,
            data:'error occured',
        }
    }
}





export const deleteCityApi=async(cityId:string)=>{

    try{

        const resDeleteCitieApi=await axiosClient.delete(`/admin/city/${cityId}/delete`)

        return {
            status:resDeleteCitieApi.data.status,
            data:resDeleteCitieApi.data.message,
            statusCode:resDeleteCitieApi.status
        }


    }catch(error){
        console.log("error ocrrued in delteCitieApi",error)

        return {
            status:false,
            data:'error occured',
        }
    }
}