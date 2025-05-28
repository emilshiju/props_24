import { getDetails } from "@/src/controllers/admin_controller/verification_handler";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest,{params}:{params:{userId:string}}){

    try{


        const { userId } = await Promise.resolve(params);

        const resEntitieDetails = await getDetails(userId)
        

        if(!resEntitieDetails){
             return NextResponse.json({status:false, message: 'internal error'},{status:500});

        }


    return NextResponse.json({status:true, message:resEntitieDetails},{status:200});




    }catch(error){
        console.log("error occured in route entitiedetails",error)

        return  NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}