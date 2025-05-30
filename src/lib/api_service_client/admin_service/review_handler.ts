import { reviewType } from "@/src/type/components_type/all_admin_type"
import axiosClient from "../../axios_client"




export const addReviewAdminApi=async(data:reviewType)=>{
    

    try{

        const ressAddReviewApi=await axiosClient.post('/user/review/add',data)

        return {
            status:ressAddReviewApi.data.status,
            data:ressAddReviewApi.data.message,
            statusCode:ressAddReviewApi.status
        }


    }catch(error:any){
        console.log("error occured in addReviewAdminApi",error)
        
        return {
            status:false,
            data: error?.response?.data?.message ?? "something went wrong ",
        }
    }
}




export const listAllReviewApi=async()=>{

    try{

        const allReview=await axiosClient.get('/user/review')

        return {
            status:allReview.data.status,
            data:allReview.data.message,
            statusCode:allReview.status
        }


    }catch(error:any){
        console.log("error occured in listAllReviewApi",error)
        
         return {
            status:false,
            data: error?.response?.data?.message ?? "something went wrong ",
        }
    }
}

export const deleteReviewApi=async(id:string)=>{

    try{

        const ress=await axiosClient.delete(`/user/review/${id}/delete`)

        return {
            status:ress.data.status,
            data:ress.data.message,
            statusCode:ress.status
        }


    }catch(error:any){
        console.log("error occurrd in the deleteReviewApi",error)
       
        return {
            status:false,
            data: error?.response?.data?.message ?? "something went wrong ",
        }
    }
}