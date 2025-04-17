import { uploadProfileImageUrl } from "@/src/controllers/user_controller/user_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { NextRequest, NextResponse } from "next/server";




export async function POST(request:NextRequest){



    try{

        console.log("in here uploadImage")

        const decodedToken = request.headers.get('decoded-token')
        const tokenData:extracted_token= decodedToken ? JSON.parse(decodedToken) : null;

        console.log("Decoded token data:", tokenData);
        
        if(!tokenData){
            return  NextResponse.json({status:false,message:"error occured"},{status:200})
        }

        const {imageUrl}= await request.json()

        console.log(imageUrl)

        const uploaded =await uploadProfileImageUrl(tokenData.userId,imageUrl)

        if(!uploaded){
            return NextResponse.json({status:false,message:"error occured"},{status:200})
        }

        return NextResponse.json({status:true,message:"sucessfully updated"},{status:200})


    }catch(error){
        
        console.log("error occured in the uploadimage file ",error)
        return NextResponse.json({status:false,message:"error occured"},{status:500})
    }



}
