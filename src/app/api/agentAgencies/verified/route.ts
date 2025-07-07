import { checkIsVerified } from "@/src/controllers/agentAgenciesController/common_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import {  NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode'


export async function GET(){


    try{


        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value;



        if(!token){
            return  NextResponse.json({status:false,message:"error occured"},{status:500})
        }

        const tokenData: extracted_token = jwtDecode(token);


        const ress = await  checkIsVerified(tokenData.userId)

        console.log("got second",ress)

        return NextResponse.json({status:true,message:ress},{status:200})


    }catch(error){
        console.log("error occured in the agent agenceis verified",error)
        return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}