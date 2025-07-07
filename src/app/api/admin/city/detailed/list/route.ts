import { listDetailedCity } from "@/src/controllers/admin_controller/city_controller";
import {  NextResponse } from "next/server";




export async function GET(){


    try{


        const allData=await listDetailedCity()

        if(!allData){
            return NextResponse.json({status:true,message:'internal error'},{status:500})
        }

        console.log("got all dataaaaaaaaaaaaaa")
        console.log(allData)


        return NextResponse.json({status:true,message:allData},{status:200})


    }catch(error){
        console.log("error occured in detailed list route",error)
        return NextResponse.json({status:true,message:'internal error'},{status:500})
    }
}