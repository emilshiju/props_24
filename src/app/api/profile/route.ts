import { verifyProfile } from "@/src/controllers/admin_controller/verification_handler";
import { createProfile } from "@/src/controllers/user_controller/user_controller";
import { extracted_token } from "@/src/type/controller_type/token_type";
import { profileType } from "@/src/type/controller_type/user_controller";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode'



export async function POST(request:NextRequest){


    try{
       
        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value;
                
                
        if(!token){
            return  NextResponse.json({ status: false, message: "Unauthorized: Token missing" }, { status: 401 })
        }

        const tokenData: extracted_token = jwtDecode(token);



        const profileDetails:profileType=await request.json()

        console.log("hereeeeeeeeeeeeeeeeeeeee")

        console.log(profileDetails)

        const created = await createProfile(tokenData.userId,profileDetails)

        if(!created){
            return NextResponse.json({status:false,message:"internal error occured"},{status:200})
        }

        return  NextResponse.json({status:true,message:"sucessfully added"},{status:200})



    }catch(error){

        console.log("error occur in create profile",error)

        return  NextResponse.json({status:false,message:"internal error occured"},{status:500})

       
    }

}





export async function PATCH(request:NextRequest){


    try{


       
        const data:{profileId:string}=await request.json()

        const verified =await verifyProfile(data.profileId)

        if(!verified){
            return NextResponse.json({status:false, message: "error occur in verifying" },{ status: 500 })
        }


        return NextResponse.json({status:true, message: "sucesssfulyy verified" },{ status: 200 })



    }catch(error){

        console.log("error occred in the patch reqeust",error)

        return NextResponse.json({status:false, message: "error occur in verifying" },{ status: 500 })
    }

}

