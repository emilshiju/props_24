import { editCity } from "@/src/controllers/admin_controller/city_controller";
import { cityType } from "@/src/type/components_type/all_admin_type";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){


    try{


        const { id, data } :{id:string,data:cityType}= await request.json();

        const updated =await  editCity(id,data)

        if(!updated){
            return NextResponse.json({status:false,message:'internal error'},{status:500})
        }

        return NextResponse.json({status:true,message:updated},{status:200})



    }catch(error){
        console.log("error ocrrued in route editCitie",error)
        
        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}