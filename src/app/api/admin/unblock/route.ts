import { unBlockUser } from "@/src/controllers/admin_controller/list_user_controller";

import { NextRequest, NextResponse } from "next/server";





export async function PATCH(request:NextRequest){


    try{


        const data:{userId:string}=await request.json()

        const unBlocked =await unBlockUser(data.userId)

        if(!unBlocked){
            return NextResponse.json({status:false, message: "error occur in unBlock user" },{ status: 500 })
        }


        return NextResponse.json({status:true, message: "sucesssfulyy unBlocked" },{ status: 200 })



    }catch(error){

        console.log("error occred in the patch reqeust",error)

        return NextResponse.json({status:false, message: "error occur in unBlock user" },{ status: 500 })
    }

}


