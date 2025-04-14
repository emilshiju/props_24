import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){


    try{
        console.log("requesttttttttttttttttttttttttttttt")
        console.log(request.headers)

        const decodedToken = request.headers.get('x-decoded-token');
        const tokenData = decodedToken ? JSON.parse(decodedToken) : null;
        
        console.log("Decoded token data:", tokenData);


        const profileDetails=await request.json()

        console.log("hereeeeeeeeeeeeeeeeeeeee")

        console.log(profileDetails)

        return  NextResponse.json({status:true},{status:200})




    }catch(error){

        console.log("error occur in create profile",error)
    }

}