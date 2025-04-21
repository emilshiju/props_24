
import axiosClient from "../../axios_client"




export const listAllUsersApi=async()=>{

    try{

        const reslistAllUsersApi = await axiosClient.get('admin/users/list_users')

        return {status:reslistAllUsersApi.data.status,
            data:reslistAllUsersApi.data.message,
            statusCode:reslistAllUsersApi.status}

        


    }catch(error){
        console.log("error occur in list  listAllUsersAPi ",error)

        return {
            status:false,
            data:"error occured ",
            
        }
    }
}




export const getSingleUserDetailsApi=async(userId:string)=>{

    try{

        const resgetSingleUserDetailsApi = await axiosClient.get(`admin/users/userDetails/${userId}`)

        console.log("in herer responseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        const daata=resgetSingleUserDetailsApi.data.message
        console.log(daata)

        return {
            status:resgetSingleUserDetailsApi.data.status,
            data:resgetSingleUserDetailsApi.data.message,
            statusCode:resgetSingleUserDetailsApi.status
        }


    }catch(error){
        console.log("error occur in the api getsingle userdetails api",error)
        return {
            status:false,
            data:'error occured'
        }
    }
}