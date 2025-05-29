import { listSpecialization } from "@/src/controllers/admin_controller/specialization"
import { NextRequest, NextResponse } from "next/server"






export async function GET(request:NextRequest){

    try{

        

        const allSpecialization = await listSpecialization()
        

        if(!allSpecialization){
            return  NextResponse.json({status:false,message:"error occured"},{status:500})
        }

        return  NextResponse.json({status:true,message:allSpecialization},{status:200})
       

    }catch(error){
        console.log("error occured in route add specialization",error)

        return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}