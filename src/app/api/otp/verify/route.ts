import { verifyOTP } from '@/src/controllers/user_controller/user_controller';
import { VerifyOTPResponse } from '@/src/type/controller_type/user_controller';
import { NextResponse } from 'next/server';




export async function POST(request:Request){

    try{

        const {email,otp}:{email:string,otp:string}= await request.json();

        console.log("here")
        console.log(email,otp)

        const verified:VerifyOTPResponse = await verifyOTP(email,otp)
        console.log("verified otp")

        if(!verified.status){
            throw new Error('Error in verify OTP');
        }

        if(!verified.found){
            return NextResponse.json({status:false, message: "OTP incorrect" },{status:200});
        }

        console.log("response send ")

        return NextResponse.json({status:true ,message: "Verified  OTP" },{status:200});

        

    }catch(error){

        console.log("error in verify otp ",error)

        return NextResponse.json({status:false,message: "error occur in verify OTP" },{ status: 500 } );

    }
}