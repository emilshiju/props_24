import { addCity } from "@/src/controllers/admin_controller/city_controller";
import { cityType } from "@/src/type/components_type/all_admin_type";
import { AddCityResponse } from "@/src/type/controller_type/admin_controller";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request:NextRequest){


    try{

        const data:cityType=await request.json()

        const addedData:AddCityResponse = await addCity(data)
       
        if(!addedData.status){
            console.log("poyiiiiiiiiiiiiiiiiiiii 111")
            return NextResponse.json({status:false,message:addedData.message},{status:409})
        }

        return NextResponse.json({status:true,message:"sucesfuly added"},{status:200})


    }catch(error){
        console.log("poyiiiiiiiiiiiiiiiiiiii 2222222222222222")
        console.log("error occured in route addCitie",error)
        return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}


