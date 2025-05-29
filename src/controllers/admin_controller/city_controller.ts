import { cityType, detailedCityReqType } from "@/src/type/components_type/all_admin_type"
import prisma from "../prisma_client"
// import { AddCityResponse } from "@/src/type/controller_type/admin_controller";
import { Asul } from "next/font/google";



export async function addCity(data:cityType){

    try{
      

      const existingCity = await prisma.city.findFirst({
        where: {
          cityName: {
            equals: data.city.trim(),
            mode: 'insensitive',
          },
        },
      });

      if(existingCity){

        
        return {status: "exists",message:"already exists"}
      }

        const response= await prisma.city.create({
            data: {
                cityName: data.city.trim(),
                country: data.country,
              },
        })

        return {status: "success",message:"sucessfully added"}



    }catch(error){

        console.log("error ocured in addCitie",error)

       return  {status: "error",message:"internal error"}
    }
}


export async function  listCity(){

    try{

        const response=await prisma.city.findMany({include: {
          details: true, 
        },})

        const filtered = response.filter(city => city.details)

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
            include: {
              details: true,
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




export  async function addDetailedCity(data:detailedCityReqType){

  try{

    const existing = await prisma.cityDetails.findUnique({
      where: {
        cityId: data.city,
      },
    });

    if(existing){
      return { status: "exists", message: "City details already exist." };
    }

    const added = await prisma.cityDetails.create({
      data: {
        cityId:data.city,
        availableProperties:data.details.availableProperties,
        averagePrice:data.details.averagePrice,
        description:data.details.description,
        popularity:data.details.popularity,
        aboutContent:data.about.content,
        imageUrl:data.image,
        areas:data.areas,
        types:data.types
      },
    });

    return { status: "success",message:"sucessfully added" };

    
  }catch(error){
    console.log("error occured in addDetailedCity",error)
    
    return { status: "error", message: "internal error" };


  }

}


export async function  listDetailedCity(){

  try{

    const allData = await prisma.cityDetails.findMany({
      include: {
        city: {
          select: {
            cityName: true
          }
        }
      }
    });

    return allData

  }catch(error){
    console.log("error occured in editDetaieldCity",error)
  }
}




export async function detailedViewCity(id:string){

  try{


    const city = await prisma.cityDetails.findUnique({
      where: {
        id: id,
      }, include: {
        city: {
          select: {
            cityName: true
          }
        }
      }
    });

    console.log("i got cityyyyyyyyy")
    console.log(city)

    if (!city) {
      console.log(`City with ID ${id} not found.`);
      return false
    }

    return city


  }catch(error){
    console.log("error occured in detailedViewCity")
    return false
  }
}


export async function editDetailedCity(id:string,data:detailedCityReqType){

  try{
    console.log("i gott iddd",id)
    console.log("alldataa",data)

    const cityExists = await prisma.cityDetails.findUnique({
      where: { id: id }
    });

    if (!cityExists) {
      throw new Error(`City with ID ${data.city} does not exist`);
    }
    
    const updatedCity = await prisma.cityDetails.update({
      where: { id: id },
      data: {
        cityId: data.city,
        availableProperties: data.details.availableProperties,
        averagePrice: data.details.averagePrice,
        description: data.details.description,
        popularity: data.details.popularity,
        aboutContent: data.about.content,
        imageUrl: data.image,
        areas: data.areas,
        types: data.types,
      },
    });

    return updatedCity;


  }catch(error){

    console.log("error occured in edit detailed city",error)
    return false

  }
}