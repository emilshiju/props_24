import { checkEmail } from "@/src/controllers/user_controller/user_controller";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request:NextRequest){


    try{

        const { email }=await request.json();
        console.log("this is the dataaa",email)

        const exists=await checkEmail(email)

        if(exists.status=='exists'){
            return NextResponse.json({status:false,message:"email already exists"},{status:409})
        }
        if(exists.status=='error'){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
        }
        return NextResponse.json({status:true,message:"sucess"},{status:200})

    }catch(error){
        console.log("error occured in exists email checking route")
        return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
    
}