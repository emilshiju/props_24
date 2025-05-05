import { addDetailedCity } from "@/src/controllers/admin_controller/city_controller";
import { detailedCityReqType } from "@/src/type/components_type/all_admin_type";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){




    try{

        const data:detailedCityReqType=await request.json()


        console.log("got data",data)

        const added=await addDetailedCity(data)

        if(!added){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }

        return NextResponse.json({status:true,message:data},{status:200})


    }catch(error){
        console.log("error occured in detaield city api",error)

        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}