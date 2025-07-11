
import { findAverage } from "@/src/controllers/user_controller/review_controller";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request:NextRequest,{params}:{params: Promise<{ id: string }>}){



    try{


        const { id } = await params

        const value=await findAverage(id)

        if(!value){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }

        return NextResponse.json({status:true,message:value},{status:200})

    }catch(error){
        console.log("error occured in the route review average",error)
        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}