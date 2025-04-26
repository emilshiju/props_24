import axiosClient from "../../axios_client"



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


export const  getChangedSideBarFilterApi=async(sideBarFilteredData:any,sectionName:any ,currentData:any,status:any)=>{

    try{

        console.log("come in hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",sideBarFilteredData)

        const filtered_res=await axiosClient.post('/user/filter',{sideBarFilteredData,sectionName,currentData,status})

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