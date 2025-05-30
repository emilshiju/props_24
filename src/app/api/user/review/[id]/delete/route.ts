
import { deleteReview } from "@/src/controllers/user_controller/review_controller";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request:NextRequest,{params}:{params:{id:string}}){


    try{

        const { id } = await Promise.resolve(params);
        console.log("got id ",id)
        const ress=await deleteReview(id)


        if(!ress){
            return NextResponse.json({status:false,message:"error occured"},{status:500})
        }
        return NextResponse.json({status:true,message:"sucessfuly deleted"},{status:200})


    }catch(erorr){

        console.log("error occured in the route delete review",erorr)
        return NextResponse.json({status:false,message:"error occured"},{status:500})
    }
}