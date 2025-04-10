
import { registerUser } from '@/src/controllers/user_controller/user_controller';
import { NextResponse } from 'next/server';



export async function POST (request:Request){


    try{

    
    console.log("yes")

    const data = await request.json();
    console.log("get camee")
    console.log(data)
    registerUser(data)

    return NextResponse.json({ message: 'Login successful' });


    }catch(error){

        console.log("error in route register",error)
        
    }
    
    
}



