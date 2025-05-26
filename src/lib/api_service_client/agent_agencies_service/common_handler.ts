import axiosClient from "../../axios_client"




export const checkEntityVerified=async()=>{


    try{

        const resVerified=await axiosClient.get('/agentAgencies/verified')



        return{
            status:resVerified.data.status,
            data:resVerified.data.message,
            statusCode:resVerified.status
        }



    }catch(error){
        console.log("error occured in the checkEntityVerified",error)
        return{
            status:false,
            data:"internal server error"
        }
    }
}