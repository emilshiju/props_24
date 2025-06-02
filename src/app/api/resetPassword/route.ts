import { resetPassword } from "@/src/controllers/user_controller/resetPassword_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";




export async function PUT(request:NextRequest){

    try{

        const {data,token } =await request.json()

        console.log("i got dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        console.log(data)

        if(!data){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
        }
        const decoded:extracted_token = jwtDecode(token);

        if(!decoded){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
        }
        

        const ress=await resetPassword(decoded.email,data.password)

        if(!ress){
             return NextResponse.json({status:false,message:"internal error"},{status:500})
        }

        return NextResponse.json({status:true,message:"successfulyf added"},{status:200})



    }catch(error){
        console.log('error occured in the resetPassword route',error)
        return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}