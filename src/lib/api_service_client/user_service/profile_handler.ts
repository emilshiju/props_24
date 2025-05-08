import { ProfileData } from "@/src/type/validation_type/profilePage_type"
import axiosClient from "../../axios_client"
import { createProfileRes } from "@/src/type/api_type/user_type"



export const createProfileApi=async(data:ProfileData,imageUrl:string)=>{

    try{

        const updatedValue={
            ...data,
            imageUrl
        }

        const resCreateProfileApi =await axiosClient.post('/profile',updatedValue)

        return {status:resCreateProfileApi.data.status,
                message:resCreateProfileApi.data.message,
                statusCode:resCreateProfileApi.status}



    }catch(error){

        console.log("error occured in createProfileApi",error)

        return {status:false,message:"internal error" }
    }
}




export const uploadProfileImageAPi=async(imageUrl:string)=>{

    try{

        const resUploadImageAPi=await axiosClient.post('/profile/uploadImage',{imageUrl:imageUrl})
        
        return {status:resUploadImageAPi.data.status,
            message:resUploadImageAPi.data.message,
            statusCode:resUploadImageAPi.status}

    }catch(error){

        console.log("error in uploadProfileImage",error)

        return {status:false,message:"error" }
    }
}


export const getProfileDetailsApi=async(id:string)=>{

    try{

        const resProfielDetailsApi=await axiosClient.get(`/user/view/${id}`)

        return {
            status:resProfielDetailsApi.data.status,
            data:resProfielDetailsApi.data.message,
            statusCode:resProfielDetailsApi.status
        }

        


    }catch(error){
        console.log("error occured in getProfileDetails",error)

        return {status:false,message:"error" }
    }
}




export const getPropertyDetailsApi=async(id:string)=>{

    try{

       const resPropertyDetailsApi=await axiosClient.get(`/user/property/${id}`)

        
        return {
            status:resPropertyDetailsApi.data.status,
            data:resPropertyDetailsApi.data.message,
            statusCode:resPropertyDetailsApi.status
        }



    }catch(error){
        console.log("error occured in getPropertyDetailsApi")
        
        return {status:false,message:"error" }
    }
}