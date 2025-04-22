import { cityType } from "@/src/type/components_type/all_admin_type"
import prisma from "../prisma_client"



export async function addCity(data:cityType){

    try{

        const response= await prisma.city.create({
            data: {
                cityName: data.city,
                country: data.country,
              },
        })

        return true



    }catch(error){
        console.log("error ocured in addCitie",error)
        return false
    }
}

export async function  listCity(){

    try{

        const response=await prisma.city.findMany()


        return response


    }catch(error){
        console.log("error occrued in listCitie",error)

        return false
    }
}


export async function detailedView(cityId:string){

    try{


        const detailed = await prisma.city.findUnique({
            where: {
              id: cityId,
            },
          });

        return detailed

    }catch(error){
        console.log("error occrued in datailedView",error)
        return false
    }
}


export async function editCity(id:string,data:cityType){

    try{



        const updatedCity = await prisma.city.update({
            where: {
              id: id,
            },
            data: {
              cityName: data.city, 
              country: data.country,    
              
            },
          });

          return true


    }catch(error){
        console.log("error occrued in datailedView",error)

        return false
    }
}



export async function deleteCity(cityId:string){

    try{


        const city = await prisma.city.findUnique({
            where: {
              id: cityId,
            },
          });

          
          if (!city) {
            return false
          }
          
          const deletedCity = await prisma.city.delete({
            where: {
              id: cityId,
            },
          });
          return true

        // const detailed= await prisma.city.find()

    }catch(error){
        console.log("error occrued in datailedView",error)
        return false
    }
}