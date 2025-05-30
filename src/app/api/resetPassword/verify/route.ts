
import { confirmEmail } from "@/src/controllers/user_controller/resetPassword_controller";
import { NextRequest, NextResponse } from "next/server";





export async function POST(request:NextRequest){


    try{

        const { email , role }=await request.json();

        const ress=await confirmEmail(email,role)

        if(ress.status=='error'){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
        }
        if(ress.status=='not_exists'){
             return NextResponse.json({status:false,message:"not exists"},{status:200})
        }

        return NextResponse.json({status:true,message:"internal error"},{status:200})

    }catch(error){
        console.log("error occured in the  verify email - reset password")
         return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}