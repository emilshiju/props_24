import { getAllList } from "@/src/controllers/user_controller/filter_controller";
import {  NextResponse } from "next/server";



export async function GET(){


    try{

        const list=await getAllList()

        return NextResponse.json({status:true,message:list},{status:200})


    }catch(error){
        console.log("error occur in route user list",error)
    }
}