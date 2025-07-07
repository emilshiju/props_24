
import { NextResponse } from "next/server";


export async function GET(){


    try{

        return NextResponse.json({status:false,message:'error occured'},{status:500})

        // const ress=await getAllReview()

        // if(!ress){
        //     return NextResponse.json({status:false,message:'error occured'},{status:500})
        // }

        // return NextResponse.json({status:true,message:ress},{status:200})


    }catch(error){
        console.log("error occured in the route list review",error)
        return NextResponse.json({status:false,message:'error occured'},{status:500})
    }
}