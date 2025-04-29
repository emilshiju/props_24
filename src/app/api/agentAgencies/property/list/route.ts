import { listProperty } from "@/src/controllers/agentAgenciesController/property_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { NextRequest, NextResponse } from "next/server";



export async function  GET(request:NextRequest){


    try{


        const decodedToken = request.headers.get('decoded-token');
        const tokenData:extracted_token = decodedToken ? JSON.parse(decodedToken) : null;
        

        const allProperty=await listProperty(tokenData.userId)

        console.log("got all propertyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        console.log(allProperty)

        if(!allProperty){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }

        return NextResponse.json({status:true,message:allProperty},{status:200})



    }catch(error){
        console.log("error occured in property route list",error)

        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }


    
}