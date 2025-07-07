import { listCity } from "@/src/controllers/admin_controller/city_controller";
import {  NextResponse } from "next/server";




export async function GET(){

    try{


        const allCitie=await listCity()

        if(!allCitie){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }
        console.log("all citieee")
        console.log(allCitie)

        return NextResponse.json({status:true,message:allCitie},{status:200})



    }catch(error){

        console.log("error occrued in listCitie",error)

        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}
