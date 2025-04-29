import { addProperty } from "@/src/controllers/agentAgenciesController/property_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){


    try{

        const decodedToken = request.headers.get('decoded-token');
        const tokenData:extracted_token = decodedToken ? JSON.parse(decodedToken) : null;


        const data=await request.json()

        console.log("got all dataaaaaaaaaaaaaaaaaa")
        console.log(data)


       const added = await addProperty(data,tokenData.userId)

       if(!added){
        return NextResponse.json({status:false,message:'internal error'},{status:500})
       }

       return NextResponse.json({status:true,message:added},{status:200})

    }catch(error){
        console.log("error occured in  route agentAgencies property add ")
        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}