import { detailedView } from "@/src/controllers/admin_controller/city_controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest,{params}:{params:{id:string}}){



    try{


        const { id } = await Promise.resolve(params);

        const resCity = await detailedView(id)

        console.log("got city")
        console.log(resCity)

        if(!resCity){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
        }




        return NextResponse.json({status:true,message:resCity},{status:200})



    }catch(error){
        console.log("error occur in route  city single display ",error)

        return NextResponse.json({status:false,message:"internal error"},{status:500})
    }


}