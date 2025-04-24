import { addSpecialization } from "@/src/controllers/admin_controller/specialization";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request:NextRequest){

    try{

        const data = await request.json()

        console.log("got dataaaaaaaaaaa",data)

        const added = await addSpecialization(data)

        if(!added){
            return NextResponse.json({status:false,message:'error occrued'},{status:500})
        }


        return NextResponse.json({status:true,message:"succesfully added"},{status:200})


    }catch(error){
        console.log("error occured in route add specialization",error)

        return NextResponse.json({status:false,message:'error occrued'},{status:500})
    }
}