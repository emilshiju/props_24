import { loginUser } from "@/src/controllers/user_controller/user_controller";
import { createJwtToken } from "@/src/lib/token/jwt_token";
import { cookies } from "next/headers";
import { NextRequest ,NextResponse } from "next/server";
;



export async function POST(request:NextRequest){

    try{
        

        const {userData} = await request.json()

        console.log("loginnnnnnnnnnnnnnnnnnnnnnnnnnnn")
        console.log(userData)

        const resloginOrNot  = await loginUser(userData)
        console.log("ressssssssssssssssssssssss",resloginOrNot)

        if(!resloginOrNot.status||!resloginOrNot.data){

            return NextResponse.json({status:false, message:resloginOrNot.message },{status:500});

        }

            const token=createJwtToken({id:resloginOrNot.data.id,email:resloginOrNot.data?.email,role:resloginOrNot.data?.role})

            if(!token){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
            }

            const cookieStore = await cookies()
                     
                    cookieStore.set({
                        name: 'auth_token',
                        value: token,
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'strict',
                        maxAge: 60 * 60 * 24 * 30 
                    });
            

        

            return NextResponse.json({status:true, message:resloginOrNot.message},{status:200});

        


    }catch(error){
        console.log("error ocuured in route login",error)
        return NextResponse.json({status:false, message: 'internal server  error' },{status:500});
    }


}