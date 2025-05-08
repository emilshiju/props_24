import { specialisation_Type } from "@/src/type/api_type/admin_type"
import prisma from "../prisma_client"


export async function addSpecialization(data:specialisation_Type){

    try{


        const existing = await prisma.specialization.findFirst({
            where: {
              title: {
                equals: data.title.trim(),
                mode: 'insensitive' 
              }
            }
          });
      
          if (existing) {
            return { status: "exists", message: "City details already exist." };
          }

        const added = await prisma.specialization.create({
            data:{
                title:data.title.trim(),
                description:data.description
            }
        })

        console.log("addedd",added)

        return { status: "success", message:"succesfully added" };


    }catch(error){
        console.log("error occured in addSpecialization",error)
        
        return { status: "error", message: "internal error" };

    }
}


export async function listSpecialization(){

    try{

        const allSpecialization =await prisma.specialization.findMany();

        return allSpecialization


    }catch(error){
        console.log("error occrued in listSpecialization")

        return false
    }
}

export async function deleteSpecialization(id:string){
    try{

        const deleted = await prisma.specialization.delete({
            where: {
              id: id,
            },
          });
        
        return true


    }catch(error){

        console.log("error occrued in deleteSpecialization",error)
        return false

    }
}