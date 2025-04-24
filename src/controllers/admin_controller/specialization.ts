import { specialisation_Type } from "@/src/type/api_type/admin_type"
import prisma from "../prisma_client"


export async function addSpecialization(data:specialisation_Type){

    try{

        const added = await prisma.specialization.create({
            data:{
                title:data.title,
                description:data.description
            }
        })

        console.log("addedd",added)

        return true



    }catch(error){
        console.log("error occured in addSpecialization",error)
        return false
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