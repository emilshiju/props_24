import axiosClient from "../../axios_client"



export const get_AllPending_Verification_AgentApi=async()=>{

    try{

        const res_Get_AllPending_Verification_AgenciesApi = await axiosClient.get('/admin/verification/agent')

        return {
            status:res_Get_AllPending_Verification_AgenciesApi.data.status,
            data:res_Get_AllPending_Verification_AgenciesApi.data.message,
            statusCode:res_Get_AllPending_Verification_AgenciesApi.status
        }


    }catch(error){

        console.log("error occured in getAllPendingVerificationAgent",error)

        return {
            status:false,
            data:'error occured'
        }
    }

}


export const get_AllPending_Verification_AgenciesApi=async()=>{

    try{


        const res_Get_AllPending_Verification_AgenciesApi = await axiosClient.get('/admin/verification/agencies')

        return {
            status:res_Get_AllPending_Verification_AgenciesApi.data.status,
            data:res_Get_AllPending_Verification_AgenciesApi.data.message,
            statusCode:res_Get_AllPending_Verification_AgenciesApi.status
        }



    }catch(error){

        console.log("error occrued in getAllPedingVericationAgencies ",error)

        return {
            status:false,
            data:'error occured'
        }
    }

    
}



export const get_EntitiDetails_Api=async(userId:string)=>{

    try{

      const  res_EntitiDetails_Api = await axiosClient.get(`admin/verification/entitieDetails/${userId}`)

      console.log("get get get get get get ",res_EntitiDetails_Api.data.status)

      return {
        status:res_EntitiDetails_Api.data.status,
        data:res_EntitiDetails_Api.data.message,
        statusCode:res_EntitiDetails_Api.status
      }


    }catch(error){

        console.log("error occrued in getEntitieDetails",error)

        return {
            status:false,
            data:'error occured'
        }
    }
}




export const verifyEntitieApi=async(profileId:string)=>{

    try{

        const resVerifyEntitieApi=await axiosClient.patch('/profile',{profileId:profileId})

        return {
            status:resVerifyEntitieApi.data.status,
            data:resVerifyEntitieApi.data.message,
            statusCode:resVerifyEntitieApi.status
        }

        
    }catch(error){
        console.log("error occred in verifyEntitie",error)
        
        return {
            status:false,
            data:'error occured'
        }

    }
}