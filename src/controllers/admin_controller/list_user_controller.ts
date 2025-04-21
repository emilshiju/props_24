import prisma from "../prisma_client"








export async function getAllUsersList(){


    try{



       const all_users =  await prisma.user.findMany({
        include: {
          profile: true, 
        },
      });


       console.log("all usersssssssssssssssssssss",all_users)

      

       return all_users




    }catch(error){

        console.log("error occur in the getAllUsersLIST",error)

        return false
    }
}





export async function getUserDetails(userId:string){

    try{

        const details = await prisma.profile.findFirst({
            where: {
              userId: userId, 
            },
            include: {
              user: true, 
            },
          });
          
          return details


    }catch(error){

        console.log("error occured in getuserdetails",error)

        return false
    }
}