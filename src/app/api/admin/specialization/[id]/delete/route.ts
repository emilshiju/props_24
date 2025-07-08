import { deleteSpecialization } from "@/src/controllers/admin_controller/specialization";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(request:NextRequest,{params}:{params: Promise<{ id: string }>}){

    try{

        const { id } = await params


        const deleted = await deleteSpecialization(id)

        if(!deleted){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
        }

        return NextResponse.json({status:true,message:"sucesfully deleted"},{status:200})

    }catch(error){
        console.log("error occrued in route delete Specialization",error)

        return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}