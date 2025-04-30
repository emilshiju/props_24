import { editProperty } from "@/src/controllers/agentAgenciesController/property_controller";
import { NextRequest, NextResponse } from "next/server";



export async function PUT(request:NextRequest){



    try{

        const allData=await request.json()

        console.log("got all data")
        console.log(allData)

        const edited=await editProperty(allData)

        if(!edited){
            return NextResponse.json({status:false,messaeg:'internal error'},{status:500})
        }

        return NextResponse.json({status:true,messaeg:edited},{status:200})

    }catch(error){
        console.log("error occured in route property edit",error)
        return NextResponse.json({status:false,messaeg:'internal error'},{status:500})
    }
}