import { getAllReview } from "@/src/controllers/user_controller/review_controller";
import { NextRequest, NextResponse } from "next/server";




export async function GET(request:NextRequest,{params}:{params: Promise<{ id: string }>}){



    try{

        const { id } = await params

        console.log("in here come ",id)

        const allReview=await getAllReview(id)
        console.log("got all reviewwwwwwwwwwwwwwwwwww")
        console.log(allReview)

        if(!allReview){
            return NextResponse.json({status:false,message:'error occured'},{status:500})
        }

        return NextResponse.json({status:true,message:allReview},{status:200})

    }catch(error){

        console.log("error occured in the route review list",error)
        return NextResponse.json({status:false,message:'error occured'},{status:500})
    }
}