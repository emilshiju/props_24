import { detailedViewCity } from "@/src/controllers/admin_controller/city_controller";
import { NextRequest, NextResponse } from "next/server";




export async function GET(request:NextRequest,{params}:{params:{id:string}}){


    try{

        const { id } = await Promise.resolve(params);

        const ressDetaield=await detailedViewCity(id)

        if(!ressDetaield){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }

        return NextResponse.json({status:true,message:ressDetaield},{status:200})


    }catch(error){
        console.log("error occured in route city detaield view",error)

        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}