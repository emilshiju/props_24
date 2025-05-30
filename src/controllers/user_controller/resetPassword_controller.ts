import { Role } from "@/src/type/controller_type/user_controller";
import prisma from "../prisma_client"



export async function confirmEmail(email:string,role:Role){

    try{

        const user = await prisma.user.findFirst({
      where: {
        email: email,
        role: role,
      },
    });

    if(user){
        return {status:'not_exists'}
    }

    return {status:'success'}


    }catch(error){
        console.log("error occured in the confirmEmail",error)
        return {status:'error'}
    }

}