
import { registerUser } from '@/src/controllers/user_controller/user_controller';
import { createJwtToken } from '@/src/lib/token/jwt_token';
import { UserDetails } from '@/src/type/api_type/user_type';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function POST (request:NextRequest){


    try{

        const {userDetails}:{userDetails:UserDetails} = await request.json();
        console.log("get camee")
        console.log(userDetails)

        const registered = await  registerUser(userDetails)

        if(!registered.status||!registered.user){
            
            return NextResponse.json({status:false,message:"error occur in registeration"},{status:400})
        }
        
        const token =  createJwtToken({id:registered.user.id,email:registered.user.email,role:registered.user.role})

        if(!token){
            return NextResponse.json({status:false,message:"error occur in registeration"},{status:400})
        }

         // Set the JWT token as a cookie
        const cookieStore = await cookies()
         
        cookieStore.set({
            name: 'auth_token',
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30 
        });


        return NextResponse.json({status:true, message: 'Registered successful' },{status:200});


    }catch(error){

        console.log("error in route register",error)

        return NextResponse.json({status:false, message: 'error occur while registering' },{status:500});

        
    }
    

    
}



