import { applyComplexFilters, getFilter } from "@/src/controllers/user_controller/filter_controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(){




    try{

        const res_filter = await  getFilter()

        console.log("got filterrrrrrrrrrrrrr")
        console.log(res_filter)

        if(!res_filter){
            return NextResponse.json({status:false,message:'error occur'},{status:500})
        }


        return NextResponse.json({status:true,message:res_filter},{status:200})


    }catch(error){
        console.log("error occured in route user filter",error)

        return NextResponse.json({status:false, message: 'internal error' },{status:500});
        
    }
}


export async function POST(request:NextRequest){


    try{

        const {sideBarFilteredData,sectionName,currentData,status,item}=await request.json()
        console.log("in serverrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(sideBarFilteredData,sectionName,currentData,status,item)

        const filteredResult =await  applyComplexFilters(sideBarFilteredData,sectionName,currentData,status,item)

        

        return NextResponse.json({status:true,message:filteredResult},{status:200})



    }catch(error){
        console.log("error occrued in route user filter post ",error)
    }
}