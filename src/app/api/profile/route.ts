import { createProfile } from "@/src/controllers/user_controller/user_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { profileType } from "@/src/type/controller_type/user_controller";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){


    try{
       
        const decodedToken = request.headers.get('decoded-token');
        const tokenData:extracted_token = decodedToken ? JSON.parse(decodedToken) : null;
        
        console.log("Decoded token data:", tokenData);

        if(!tokenData){
            return  NextResponse.json({status:false,message:"error occured"},{status:200})
        }


        const profileDetails:profileType=await request.json()

        console.log("hereeeeeeeeeeeeeeeeeeeee")

        console.log(profileDetails)

        const created = await createProfile(tokenData.userId,profileDetails)

        if(!created){
            return NextResponse.json({status:false,message:"error"},{status:200})
        }

        return  NextResponse.json({status:true,message:"sucess"},{status:200})




    }catch(error){

        console.log("error occur in create profile",error)

        return  NextResponse.json({status:false,message:"error occured"},{status:500})

       
    }

}