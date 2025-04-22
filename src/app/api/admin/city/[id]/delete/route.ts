import { deleteCity } from "@/src/controllers/admin_controller/city_controller";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(request:NextRequest,{params}:{params:{id:string}}){

    try{
        console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

        const { id } = await Promise.resolve(params);

        const ress = await deleteCity(id)

        if(!ress){
            return NextResponse.json({status:false,message:"not found"},{status:500})
        }

        return NextResponse.json({status:true,message:"sucesfuly deleted"},{status:200})



    }catch(error){
        console.log("error ocrrued in deleteCitie",error)
        return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}