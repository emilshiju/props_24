import { searchAll } from "@/src/controllers/user_controller/filter_controller";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){


    try{

        const {data}=await request.json()
        console.log("hyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        console.log(data)

        const allData = await searchAll(data)
       

        if(!allData ){
            return NextResponse.json({status:false,message:"iternal server errir"},{status:500})
        }

        return NextResponse.json({status:true,message:allData },{status:200})


    }catch(error){
        console.log("error occured in route user search ",error)
        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}