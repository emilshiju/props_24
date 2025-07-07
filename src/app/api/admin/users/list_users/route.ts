

import { getAllUsersList } from "@/src/controllers/admin_controller/list_user_controller";
import {  NextResponse } from "next/server";



export async function GET(){


    try{

       const allUsers = await getAllUsersList()

       

       if(!allUsers){
        return NextResponse.json({status:false, message: 'internal error' },{status:500});
       }
       

       return NextResponse.json({status:true,message:allUsers},{status:200})


    }catch(error){
        console.log('error occur in the route list users',error)
        return NextResponse.json({status:false, message: 'internal error' },{status:500});

    }
}