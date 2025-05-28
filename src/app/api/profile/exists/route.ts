import { checkPorfileExists } from "@/src/controllers/user_controller/user_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode'

export async function GET(request:NextRequest){

    try{
console.log("vanuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")

        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value;
        console.log(token)
     

        if(!token){
            return  NextResponse.json({status:false,message:"Unauthorized access"},{status:401})
        }
          
        const tokenData: extracted_token = jwtDecode(token);
          
        console.log("decoded tokennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
        console.log(tokenData)
       
        console.log("Decoded token data:", tokenData);
        
        // if(!tokenData){
        //     return  NextResponse.json({status:false,message:"error occured"},{status:500})
        // }

        const ress=await checkPorfileExists(tokenData.userId)

        if(ress.status=='not_found'){
            return NextResponse.json({status:ress.status,message:ress.message},{status:200})
        }
        
        if(ress.status=='not_verified'){
            return NextResponse.json({status:ress.status,message:ress.message},{status:200})
        }

        if(ress.status=='error'){
            return NextResponse.json({status:ress.status,message:ress.message},{status:500})
        }


        return NextResponse.json({status:ress.status,message:ress.message},{status:200})
    
    }catch(error){
        console.log("error occured in the route profile exists")
        return  NextResponse.json({status:'error',message:"internal error occured"},{status:500})
    }
}