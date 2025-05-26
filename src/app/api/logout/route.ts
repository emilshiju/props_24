
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";




export async function GET(request:NextRequest){

    try{

        const cookieStore =await cookies();
        cookieStore.set('auth_token', '', {
            expires: new Date(0),
            path: '/',
        });

        return NextResponse.json({status:true, message: 'Logged out successfully' },{status:200});

        
    }catch(error){
        console.log("error occuring while logout")
        return NextResponse.json({status:false, message: 'Logged out successfully' },{status:500});
    }
}