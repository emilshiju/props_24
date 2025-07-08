import { deleteProperty } from "@/src/controllers/agentAgenciesController/property_controller";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(request:NextRequest,{params}:{params: Promise<{ id: string }>}){

    try{

        const { id } = await params
        
        const deleted=await deleteProperty(id)

        if(!deleted){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }
        return NextResponse.json({status:true,message:'successfully deleted'},{status:200})


    }catch(error){
        console.log("error occured in route delete property",error)
        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}