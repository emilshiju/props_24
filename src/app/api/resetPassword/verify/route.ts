
import { confirmEmail } from "@/src/controllers/user_controller/resetPassword_controller";
import { createJwtToken, createJwtToken_resetPassword } from "@/src/lib/token/jwt_token";
import sendEmail from "@/src/service/node_mailer";
import { MailOptions } from "@/src/type/nodeMailer_type";
import { NextRequest, NextResponse } from "next/server";





export async function POST(request:NextRequest){


    try{console.log("ivide vanuuuuuuuuuuu")

        const { email , role }=await request.json();
        
        console.log(email,role)

        const ress=await confirmEmail(email,role)

        if(ress.status=='error'){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
        }
        if(ress.status=='not_exists'){
             return NextResponse.json({status:false,message:"not exists"},{status:200})
        }
        if(!ress.data){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
        }

        // const token=createJwtToken({id:ress.data.id,email:ress.data.email,role:ress.data.role})
        const token=await createJwtToken_resetPassword({id:ress.data.id,email:ress.data.email,role:ress.data.role})

         // Create reset password link
        const resetLink = `http://localhost:3001/resetPassword?token=${token}`;
        
        // Prepare email content
        const mailOptions: MailOptions = {
            from: process.env.SMTP_MAIL || 'props_24@gmail.com',
            to: email,
            subject: 'Password Reset Request',
            text: `Click the following link to reset your password: ${resetLink}\n\nThis link will expire in 1 hour.\n\nIf you didn't request this, please ignore this email.`,
        };

        const emailSent = await sendEmail(mailOptions);

        if(!emailSent){
            return NextResponse.json({status:false,message:"internal error"},{status:500})
        }

        return NextResponse.json({status:true, message:"Password reset link sent to your email"}, {status:200})


    }catch(error){
        console.log("error occured in the  verify email - reset password",error)
         return NextResponse.json({status:false,message:"internal error"},{status:500})
    }
}