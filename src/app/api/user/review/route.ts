import { getAllReview } from "@/src/controllers/user_controller/review_controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest){


    try{

        const ress=await getAllReview()

        if(!ress){
            return NextResponse.json({status:false,message:'error occured'},{status:500})
        }

        return NextResponse.json({status:true,message:ress},{status:200})


    }catch(error){
        console.log("error occured in the route list review")
        return NextResponse.json({status:false,message:'error occured'},{status:500})
    }
}