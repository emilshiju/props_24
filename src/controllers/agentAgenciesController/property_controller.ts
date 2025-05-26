import { PropertyReqType } from "@/src/type/validation_type/propertyType"
import prisma from "../prisma_client"
import { editPropertyType } from "@/src/type/api_type/common_type";





export async function addProperty(allData:PropertyReqType,tokenData:string){

    try{

        const user = await prisma.user.findUnique({
            where: { id: tokenData },
            include: { profile: true },
          });
      
          if (!user || !user.profile) {
            console.log("User or profile not found");
            return false;
          }
      
          // Step 2: Create property with profileId
          await prisma.property.create({
            data: {
              name: allData.name,
              price: allData.price,
              room: allData.room,
              cityId: allData.city,
              bathroom: allData.bathroom,
              sm: allData.sm,
              imageUrl: allData.imageUrl,
              profileId: user.profile.id,
            },
          });
      
          return true


    }catch(error){
        console.log("error occur in addProperty Controller",error)
        
        return false
    }

}

export async function listProperty(tokenData:string){


  try{

    const user = await prisma.user.findUnique({
      where: { id: tokenData },
      include: { profile: true },
    });


    if (!user || !user.profile) {
      console.log("User or profile not found");
      return false;
    }


    const list= await prisma.property.findMany({
      where: {
        profileId: user.profile.id
      }
    });

    return list


  }catch(error){
    console.log("error occured in listProperty",error)
    return false
  }
}



export async function detailedView(id:string){

  try{

    const detailed = await prisma.property.findUnique({
      where: {
        id: id,
      }, include: {
        city: {
          select: { 
            id: true,  
            cityName: true,
          }, 
        },
      },
    });

    

    if(!detailed){
      return false
    }

    return detailed;


  }catch(error){
    console.log("error occured in detailedView")
    return false
  }
}



export async function editProperty(data:editPropertyType){

  try{

    const edited = await prisma.property.update({
      where: { id: data.id },  // Find the property by its ID
      data: {
        name: data.name,
        price: data.price,
        room: data.room,
        cityId: data.city,  // Assuming 'city' is a string or ID, modify accordingly
        bathroom: data.bathroom,
        sm: data.sm,
        imageUrl: data.imageUrl,
      },
    });
    return edited


  }catch(error){
    console.log("error occured in editProperty ",error)
    return false
  }
}



export async function deleteProperty(id:string){

  try{

    const deleted = await prisma.property.delete({
      where: { id }, 
    });

    
    return true



  }catch(error){
    console.log("error occured in deleteProperty",error)
    return false
  }
}