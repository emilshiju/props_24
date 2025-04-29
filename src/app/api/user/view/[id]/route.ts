
import { detailedViewProfile } from "@/src/controllers/user_controller/user_controller";
import { NextRequest, NextResponse } from "next/server";





export async function GET(request:NextRequest,{params}:{params:{id:string}}){


    try{


        const { id } = await Promise.resolve(params);

        const profileDetailedView=await detailedViewProfile(id)

        if(!profileDetailedView){
            return NextResponse.json({status:false,message:"internal Error"},{status:500})
        }

        return NextResponse.json({status:true,message:profileDetailedView},{status:200})


        
    }catch(error){
        console.log("error occured in route view ")
        return NextResponse.json({status:false,message:"internal Error"},{status:500})
    }
}