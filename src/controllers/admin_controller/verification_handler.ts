import prisma from "../prisma_client"



export async function get_All_Pending_VerificationAgent(){

    try{

        const res_agent = await prisma.user.findMany({where: {
            role: "agent", 
        }})

        return res_agent



    }catch(error){

        console.log("error occur in get_all_pending_verification_agent")
    }

}




export async function get_All_Pending_VerificationAgencies(){

    try{

        const res_agencies = await prisma.user.findMany({where: {
            role: "agencies", 
        }})

        

        return res_agencies


    }catch(error){

        console.log("error occur in get_all_pending_verification_agencies")
    }

}