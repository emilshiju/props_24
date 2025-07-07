
import { getAllAgencies } from "@/src/controllers/user_controller/filter_controller";
import {  NextResponse } from "next/server";



export async function GET(){


    try{

        const allAgencies=await getAllAgencies()

        if(allAgencies?.length==0){
            return NextResponse.json({status:true,message:allAgencies},{status:200})
        }
        if(!allAgencies){
            return NextResponse.json({status:true,message:'internal error'},{status:500})
        }

        return NextResponse.json({status:true,message:allAgencies},{status:200})

    }catch(error){
        console.log("error occured in agencies route",error)
        return NextResponse.json({status:true,message:'internal error'},{status:500})
    }
}