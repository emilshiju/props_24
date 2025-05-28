import { listProperty } from "@/src/controllers/agentAgenciesController/property_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode'




export async function  GET(request:NextRequest){


    try{


        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value;


         if(!token){
            return  NextResponse.json({status:false,message:"error occured"},{status:500})
        }

        const tokenData: extracted_token = jwtDecode(token);


        const allProperty=await listProperty(tokenData.userId)


        if(!allProperty){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }

        return NextResponse.json({status:true,message:allProperty},{status:200})



    }catch(error){
        console.log("error occured in property route list",error)

        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }


    
}