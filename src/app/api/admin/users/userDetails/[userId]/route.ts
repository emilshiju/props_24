import { getUserDetails } from "@/src/controllers/admin_controller/list_user_controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest,{params}:{params:{userId:string}}){


    try{

        const { userId } = await Promise.resolve(params);


        const resUserDetails = await getUserDetails(userId)

        if(!resUserDetails){
            return NextResponse.json({status:false,message: 'internal error'},{status:500});
        }
        

        return NextResponse.json({status:true, message:resUserDetails },{status:200})



    }catch(error){
        
        console.log("error occured in route userdetails")

        return NextResponse.json({status:false, message: 'internal error' },{status:500});
        
    }
}