import prisma from "../prisma_client"


export async function getAllUsersList(){


    try{



       const all_users =  await prisma.user.findMany({
        include: {
          profile: true, 
        },
        orderBy: {
          userName: 'asc',
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


export  async function blockUser(userId:string){

  try{


    const  blockedUser=await prisma.user.update({
      where: { id: userId },
      data: { status: true },
    })
    console.log("blockedUser",blockedUser)

    return true


  }catch(error){
    console.log("error occured in blockuser",error)

    return false
  }


}




export async function unBlockUser(userId:string){


  try{


    const  unBlockUser=await prisma.user.update({
      where: { id: userId },
      data: { status: false },
    })

    console.log("unBlockedUser",unBlockUser)

    return true



  }catch(error){
    console.log("error ocured in the unblockuser",error)
    return false
  }


}