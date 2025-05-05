import { editDetailedCity } from "@/src/controllers/admin_controller/city_controller";
import { detailedCityReqType } from "@/src/type/components_type/all_admin_type";
import { NextRequest, NextResponse } from "next/server";




export async function POST(request:NextRequest){



    try{

        const { id, data } :{id:string,data:detailedCityReqType}= await request.json();

        const updated=await editDetailedCity(id,data)

        if(!updated){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }
        return NextResponse.json({status:true,message:updated},{status:200})

    }catch(error){
        console.log("error occured in route edit detaield city")
        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}