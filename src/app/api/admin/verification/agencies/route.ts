
import { get_All_Pending_VerificationAgencies } from "@/src/controllers/admin_controller/verification_handler";
import { NextRequest ,NextResponse} from "next/server";





export async function GET(request:NextRequest){

    try{

        const allPendingAgencies = await get_All_Pending_VerificationAgencies()


        if(!allPendingAgencies){
            return NextResponse.json({status:false, message:'internal error' },{status:500})
        }
       

        return NextResponse.json({status:true, message:allPendingAgencies },{status:200})
        
        


    }catch(error){
        console.log("error occur in route agenceis ",error)
        return NextResponse.json({status:false, message:'internal error ' },{status:500})
    }
}