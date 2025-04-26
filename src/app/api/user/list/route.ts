import { getAllList } from "@/src/controllers/user_controller/filter_controller";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request:NextRequest){


    try{

        const list=await getAllList()

        return NextResponse.json({status:true,message:list},{status:200})


    }catch(error){
        console.log("error occur in route user list")
    }
}