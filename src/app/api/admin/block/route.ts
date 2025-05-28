import { blockUser } from "@/src/controllers/admin_controller/list_user_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { NextRequest, NextResponse } from "next/server";
import { useId } from "react";





export async function PATCH(request:NextRequest){


    try{


        const data:{userId:string}=await request.json()

        console.log("userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrId",data)

        const blockedUser=await blockUser(data.userId)

        if(!blockedUser){
            return NextResponse.json({status:false, message: "error occur in block user" },{ status: 500 })
        }


        return NextResponse.json({status:true, message: "sucesssfulyy blocked" },{ status: 200 })



    }catch(error){

        console.log("error occred in the patch reqeust",error)

        return NextResponse.json({status:false, message: "error occur in block user" },{ status: 500 })
    }

}


