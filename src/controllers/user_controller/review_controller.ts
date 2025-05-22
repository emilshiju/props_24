import { reviewReqType } from "@/src/type/components_type/all_users_type";
import prisma from "../prisma_client";




export async function addReviewDetails(data:reviewReqType){

    try{

        const added=await prisma.review.create({
            data:{
                name:data.name,
                content:data.content,
                rating:data.rating,
                profileId:data.profileId,
            }
        })

        return true


    }catch(error){
        console.log("error occured in addReviewDetails",error)

        return false
    }
}


export async function getSeparatedReview(id:string){

    try{

        const allReviews = await prisma.review.findMany({
            where: {
            profileId: id,
            },
        });

        return allReviews


    }catch(error){
        console.log("error occured in the getSeparatedReview",error)
        return false
    }
}



export async function getAllReview(id:string){


    try{

         const allReviews = await prisma.review.findMany({
      where: {
        profileId:id, 
      },
    });


        return allReviews



    }catch(error){
        console.log("error occured in the getAllReview",error)
        return false
    }

}

export async function deleteReview(id:string){

    try{

         const reviewExists = await prisma.review.findUnique({
      where: {
        id: id,
      },
    });

    if(!reviewExists){
        return false
    }


         const deletedReview = await prisma.review.delete({
      where: {
        id: id,
      },
    });

    return deletedReview


    }catch(error){
        console.log("error occured in the deleteReview",error)
        return false
    }
}





export async function  findAverage(id:string){

    try{



         const reviews = await prisma.review.findMany({
      where: { profileId:id },
      select: { rating: true },  // only fetch rating to reduce payload
    });

    if (!reviews) {
      return false  // or 0 if you prefer when no reviews exist
    }

    // Calculate sum of ratings
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);

    // Calculate average
    const average = sum / reviews.length;

 
    const averageValue=average

    console.log("average valueeeeeeeeeeeee")
    console.log(averageValue)
    return averageValue


    }catch(error){
        console.log("error occured in the findaverage",error)

        return false
    }
}