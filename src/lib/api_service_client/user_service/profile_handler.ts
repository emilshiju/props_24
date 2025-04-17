import { ProfileData } from "@/src/type/validation_type/profilePage_type"
import axiosClient from "../../axios_client"
import { createProfileRes } from "@/src/type/api_type/user_type"



export const createProfileApi=async(data:ProfileData)=>{

    try{

        const resCreateProfileApi =await axiosClient.post('/profile',data)

        return {status:resCreateProfileApi.data.status,
                message:resCreateProfileApi.data.message,
                statusCode:resCreateProfileApi.status}



    }catch(error){

        console.log("error occured in createProfileApi",error)

        return {status:false,message:"error " }
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