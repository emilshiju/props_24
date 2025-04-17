import { loginUser } from "@/src/controllers/user_controller/user_controller";
import { NextRequest ,NextResponse } from "next/server";
;



export async function POST(request:NextRequest){

    try{

        const {userData} = await request.json()

        console.log("loginnnnnnnnnnnnnnnnnnnnnnnnnnnn")
        console.log(userData)

        const resloginOrNot  = await loginUser(userData)
        console.log("ressssssssssssssssssssssss")

        if(!resloginOrNot.status){

            return NextResponse.json({status:false, message:resloginOrNot.message },{status:200});

        }

        if(resloginOrNot.status){

            return NextResponse.json({status:true, message:resloginOrNot.message},{status:200});

        }


    }catch(error){
        console.log("error ocuured in route login",error)
        return NextResponse.json({status:false, message: 'internal error' },{status:500});
    }


}