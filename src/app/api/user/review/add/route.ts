import { addReviewDetails } from "@/src/controllers/user_controller/review_controller";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request:NextRequest){


    try{


        const data=await request.json()

        console.log("got all data",data)


        const added=await addReviewDetails(data)

        if(!added){
            return NextResponse.json({status:false,message:"error occured"},{status:500})
        }

        return NextResponse.json({status:true,message:"sucessfuly added"},{status:200})


    }catch(error){
        console.log("error occured in the route add review route",error)
        return NextResponse.json({status:false,message:"error occured"},{status:500})
    }
}