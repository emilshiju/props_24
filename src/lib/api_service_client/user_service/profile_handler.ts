import { ProfileData } from "@/src/type/validation_type/profilePage_type"
import axiosClient from "../../axios_client"



export const createProfileApi=(data:ProfileData)=>{

    try{

        const resCreateProfileApi = axiosClient.post('/profile',data)



    }catch(error){

        console.log("error occured in createProfileApi",error)
    }
}