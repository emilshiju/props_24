

import { otpRegister } from '@/src/controllers/user_controller/user_controller';
import sendEmail from '@/src/service/node_mailer';
import { MailOptions } from '@/src/type/nodeMailer_type';
import { NextResponse } from 'next/server';
import randomstring from 'randomstring';


export async function POST(request:Request) {


    try{

        const data:{email:string}= await request.json();
       

        function generateOTP() {
            return randomstring.generate({
                length: 4,
                charset: 'numeric'
            });
        }
        
      
        const otp:string = generateOTP();

        console.log("otp")
        console.log(otp)

        const mailOptions: MailOptions = {
            from: 'props_24@gmail.com',  
            to: `${data.email}`,  
            subject: `${otp}`,
            text: 'Hello, this is a test email.',
        };

        const registered:Boolean = await otpRegister(data.email,otp)

        console.log("completed OTP registered")

        if(!registered){
            return NextResponse.json({status:false, message: "error occur in generate OTP" },{ status: 500 } );
        }

        const sentMessage =await  sendEmail(mailOptions)
        console.log("completed send message")

        if(!sentMessage){
            return NextResponse.json({status:false, message: "error occur in generate OTP" },{ status: 500 } );
        }


        return NextResponse.json({status:true ,message: "Generate OTP  Successful" },{ status: 200 } );
        

    }catch(error){

        console.log("error in route generate otp",error)

        return NextResponse.json({status:false, message: "error occur in generate OTP" },{ status: 500 } );
    }
    

  }
