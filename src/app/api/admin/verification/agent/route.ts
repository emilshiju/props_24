
import { get_All_Pending_VerificationAgent } from "@/src/controllers/admin_controller/verification_handler";
import {NextResponse} from "next/server";





export async function GET(){

    try{

        const allPendingAgent= await get_All_Pending_VerificationAgent()


        if(!allPendingAgent){
            return NextResponse.json({status:false, message:'internal error' },{status:500})
        }
       

        return NextResponse.json({status:true, message:allPendingAgent },{status:200})
        
        

    }catch(error){
        console.log("error occur in route agenceis ",error)
        return NextResponse.json({status:false, message:'internal error' },{status:500})
    }
}