import { cityType, detailedCityReqType } from "@/src/type/components_type/all_admin_type"
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
            data:error.response?.data?.message || "Internal  error",

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
            data:'internal error',
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





export const cityDetailsApi=async(data:detailedCityReqType)=>{

    try{

        const resCityDetailsApi=await axiosClient.post('/admin/city/detailed/add',data)

        return {
            status:resCityDetailsApi.data.status,
            data:resCityDetailsApi.data.message,
            statusCode:resCityDetailsApi.status
        }


    }catch(error:any){
        console.log("error occrued in cityDetailsApi",error)

        return {
            status:false,
            data:error.response?.data?.message 

        }
        
    }
}




export const listCityDetailsApi=async()=>{

    try{


        const resListCityDetailsApi=await axiosClient.get('/admin/city/detailed/list')

        return {
            status:resListCityDetailsApi.data.status,
            data:resListCityDetailsApi.data.message,
            statusCode:resListCityDetailsApi.status
        }


    }catch(error){
        console.log("error occured in listCityApi",error)

        return {
            status:false,
            data:'error occured',
        }
    }
}





export const detailedViewCityApi=async(id:string)=>{
    try{

        const resDetailedViewCityApi=await axiosClient.get(`/admin/city/detailed/${id}/view`)

        return {
            status:resDetailedViewCityApi.data.status,
            data:resDetailedViewCityApi.data.message,
            statusCode:resDetailedViewCityApi.status
        }

    }catch(error){
        console.log("error occured in getDetailedCityApi",error)


        return {
            status:false,
            data:'error occured',
        }
    }
}



export const editDetailedCityApi=async(id:string,data:detailedCityReqType)=>{

    try{

        const resEditDetailedCityAPi=await axiosClient.post('/admin/city/detailed/edit',{id:id,data:data})

        return {
            status:resEditDetailedCityAPi.data.status,
            data:resEditDetailedCityAPi.data.message,
            statusCode:resEditDetailedCityAPi.status
        }
    }catch(error){
        console.log("error occured in editDetailedCityApi")

        return {
            status:false,
            data:'internal error ',
        }

    }
}