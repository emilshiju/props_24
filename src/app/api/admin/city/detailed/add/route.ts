import { addDetailedCity } from "@/src/controllers/admin_controller/city_controller";
import { detailedCityReqType } from "@/src/type/components_type/all_admin_type";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){




    try{

        const data:detailedCityReqType=await request.json()


        console.log("got data",data)

        const result=await addDetailedCity(data)

        if (result.status === "exists") {
            return NextResponse.json({ status: false, message: result.message }, { status: 200 }); 
          }
      
        if (result.status === "error") {
            return NextResponse.json({ status: false, message: result.message }, { status: 500 }); 
          }
      
          return NextResponse.json({ status: true, message: result.message }, { status: 200 }); 

    }catch(error){

        console.log("error occured in detaield city api",error)

        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}