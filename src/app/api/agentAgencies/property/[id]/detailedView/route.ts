
import { detailedView } from "@/src/controllers/agentAgenciesController/property_controller";
import {  NextRequest, NextResponse } from "next/server";




export async function GET(request:NextRequest,{params}:{params: Promise<{ id: string }>}){


    try{


        const { id } = await params

        const detailed  = await detailedView(id)

        if(!detailed){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }

        return NextResponse.json({status:true,message:detailed},{status:200})

    }catch(error){
        
        console.log("error occured in route detailedView property",error)
        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }


}