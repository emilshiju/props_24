import { PropertyReqType } from "@/src/type/validation_type/propertyType"
import prisma from "../prisma_client"




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
              city: allData.city,
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