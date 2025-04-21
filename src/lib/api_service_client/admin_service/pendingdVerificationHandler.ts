import axiosClient from "../../axios_client"



export const get_AllPending_Verification_AgentApi=async()=>{

    try{

        const res_Get_AllPending_Verification_AgenciesApi = await axiosClient.get('/admin/verification/agent')





    }catch(error){
        console.log("error occured in getAllPendingVerificationAgent",error)
    }

}


export const get_AllPending_Verification_AgenciesApi=async()=>{

    try{


        const res_Get_AllPending_Verification_AgenciesApi = await axiosClient.get('/admin/verification/agencies')





    }catch(error){
        console.log("error occrued in getAllPedingVericationAgencies ",error)
    }

    
}