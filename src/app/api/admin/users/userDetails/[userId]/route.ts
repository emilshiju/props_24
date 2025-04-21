import { getUserDetails } from "@/src/controllers/admin_controller/list_user_controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest,{params}:{params:{userId:string}}){


    try{

        const { userId } = await Promise.resolve(params);


        console.log("useridddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
        console.log(userId)

        const resUserDetails = await getUserDetails(userId)

        if(!resUserDetails){
            return NextResponse.json({status:false, message:resUserDetails},{status:500});
        }
        console.log("user detailssssssssssssssssssssssssss")
        console.log(resUserDetails)

        return NextResponse.json({status:true, message:resUserDetails },{status:200})



    }catch(error){
        
        return NextResponse.json({status:false, message: 'internal error' },{status:500});
        
    }
}