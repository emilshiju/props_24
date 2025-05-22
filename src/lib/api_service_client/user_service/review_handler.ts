import { reviewValidationType } from "@/src/type/components_type/all_users_type"
import axiosClient from "../../axios_client";


export const addReviewDetailsApi=async(values:reviewValidationType,rating:number,profileId:string)=>{


    try{
           const updated_value = {
      ...values,
      rating,
      profileId,
    };

    const resAddReviewDetailsApi=await axiosClient.post('/user/review/add',updated_value)

    return {
        status:resAddReviewDetailsApi.data.status,
        data:resAddReviewDetailsApi.data.message,
        statusCode:resAddReviewDetailsApi.status
    }


    }catch(error){
        console.log("error occured in addReviewDetailsApi",error)

         return {status:false,data:"error" }

    }
}


export const listSeparatedReviewApi=async(id:string)=>{
    try{

        const allReview=await axiosClient.get(`/user/review/${id}`)

        return {
            status:allReview.data.status,
            data:allReview.data.message,
            statusCode:allReview.status
        }


    }catch(error){
        console.log("error occured in the listSeparatedReviewApi",error)

        return {status:false,data:"error occured" }
    }
}



export const findAverageReviewApi=async(id:string)=>{

    try{

        const averageValue=await axiosClient.get(`/user/review/${id}/average`)

        return {
            status:averageValue.data.status,
            data:averageValue.data.message,
            statusCode:averageValue.status
        }


    }catch(error){
        console.log("error occured in the findAverageReviewApi",error)
        return {status:false,data:"error occured" }
    }
}