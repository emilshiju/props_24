import { addCity } from "@/src/controllers/admin_controller/city_controller";
import { cityType } from "@/src/type/components_type/all_admin_type";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request:NextRequest){


    try{


        const data:cityType=await request.json()

        const addedData = await addCity(data)

        if(!addedData){
            return NextResponse.json({status:false,message:"error occured"},{status:500})
        }

        return NextResponse.json({status:true,message:"sucesfuly added"},{status:200})


    }catch(error){
        console.log("error occured in route addCitie",error)
        return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}


