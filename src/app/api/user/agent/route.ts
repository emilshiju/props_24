import { getAllAgent } from "@/src/controllers/user_controller/filter_controller";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request:NextRequest){

    try{

        const allAgent=await getAllAgent()

        console.log("got all agenttttttttttt")
        console.log(allAgent)

        if(allAgent?.length==0){
            return NextResponse.json({status:true,message:allAgent},{status:200})
        }
        if(!allAgent){
            return NextResponse.json({status:false,message:'error'},{status:500})
        }

        return NextResponse.json({status:true,message:allAgent},{status:200})

    }catch(error){
        console.log("error ocuured in agent route",error)
        return NextResponse.json({status:false,message:'error'},{status:500})
    }
}