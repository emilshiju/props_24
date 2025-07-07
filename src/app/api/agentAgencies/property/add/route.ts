import { addProperty } from "@/src/controllers/agentAgenciesController/property_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode'


export async function POST(request:NextRequest){


    try{

        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value;
        
        
        if(!token){
            return  NextResponse.json({ status: false, message: "Unauthorized: Token missing" }, { status: 401 })
        }
        
        const tokenData: extracted_token = jwtDecode(token);
        

        const data=await request.json()

       const added = await addProperty(data,tokenData.userId)

       if(!added){
        return NextResponse.json({status:false,message:'internal server error'},{status:500})
       }

       return NextResponse.json({status:true,message:"sucessfully added"},{status:200})

    }catch(error){
        console.log("error occured in  route agentAgencies property add ",error)
        return NextResponse.json({status:false,message:'internal server error'},{status:500})
    }
}