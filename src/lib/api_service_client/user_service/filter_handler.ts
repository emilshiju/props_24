import axiosClient from "../../axios_client"




export const getAllAgentApi=async()=>{

    try{


        const resAllAgentApi=await axiosClient.get('/user/agent')

        return {
            status:resAllAgentApi.data.status,
            data:resAllAgentApi.data.message,
            statusCode:resAllAgentApi.status
        }


    }catch(error){
        console.log('error occured in getAllAgentApi',error)

        return {
            status:false,
            data:"error occured"
        }
    }
}


export const getAllAgenciesApi=async()=>{

    try{

        const resAllAgenciesApi=await axiosClient.get('/user/agencies')

        return {
            status:resAllAgenciesApi.data.status,
            data:resAllAgenciesApi.data.message,
            statusCode:resAllAgenciesApi.status
        }


    }catch(error){
        console.log("error occured in getAllAgenciesApi",error)
        return {
            status:false,
            data:"error occured"
        }

    }
}
export const getSideBarFilterAPi=async()=>{

    try{

        const resGetFilterAPi = await axiosClient.get('/user/filter')

        return {
            status:resGetFilterAPi.data.status,
            data:resGetFilterAPi.data.message,
            statusCode:resGetFilterAPi.status
        }


    }catch(error){
        console.log("error occrued in getFilterAPi",error)

        return {
            status:false,
            data:"error occured"
        }
    }
}


export const  getChangedSideBarFilterApi=async(sideBarFilteredData:any,sectionName:any ,currentData:any,status:any,item:any)=>{

    try{

        console.log("come in hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",sideBarFilteredData)

        const filtered_res=await axiosClient.post('/user/filter',{sideBarFilteredData,sectionName,currentData,status,item})

        return {
            status:filtered_res.data.status,
            data:filtered_res.data.message,
            statusCode:filtered_res.status
        }



    }catch(error){
        console.log("error occur in changeSideBarFilterApi",error)

        return {
            status:false,
            data:"error occured"
        }

    }
}


export const getAll=async()=>{

    try{

    const allList=await axiosClient.get('/user/list')

    return {
        status:allList.data.status,
        data:allList.data.message,
        statusCode:allList.status
    }


    }catch(error){
        console.log("error occured in getAll",error)


        return {
            status:false,
            data:"error occured"
        }

        
    }
}



export const getAllSearchedListApi=async(value:string)=>{

    try{

        console.log("poyii")

        const resAllSearchedListApi=await axiosClient.post('/user/search',{data:value})

        return {
            status:resAllSearchedListApi.data.status,
            data:resAllSearchedListApi.data.message,
            statusCode:resAllSearchedListApi.data
        }


    }catch(error){
        console.log("error occured in getAllSearchedList",error)

        return {
            status:false,
            data:"internal error"
        }
    }
}



export const getAllDataApi=async()=>{

    try{




    }catch(error){
        console.log("error occur in getAllData",error)
    }
}