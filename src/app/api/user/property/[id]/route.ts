import { getPropertyUser } from "@/src/controllers/user_controller/user_controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(_request:NextRequest,{params}:{params:{id:string}}){


    try{

        const { id } = await Promise.resolve(params);
        console.log("gotttttttt profile id",id)


       const result=await  getPropertyUser(id)

       if(!result){
        return NextResponse.json({status:false,message:'internal error'},{status:500})
       }

       return NextResponse.json({status:true,message:result},{status:200})


    }catch(error){
        console.log("error occured in route user property",error)
        return NextResponse.json({status:false,message:'internal error'},{status:500})
    }
}