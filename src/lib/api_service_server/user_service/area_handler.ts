import { getApiErrorMessage } from '@/src/type/api_type/apiRes_type';
import { cookies } from 'next/headers';

export const getDetailedCityApi=async(id:string)=>{


    try{

        const res=await fetch(`https://props-24.vercel.app/api/admin/city/${id}/detailedView`, {
            method: 'GET',}
        )

        console.log("Status Code:", res.status);

    
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    // ✅ Parse the response body
    const data = await res.json();



    console.log("Response Body:", data);
    
    return {
        status:data.status,
        data:data.message,
        statusCode:res.status
    }

        // console.log("got resssssssssssponseeeeeeeeeeeeeeeeeeeeeeee",res)


    }catch(error){
        console.log("error occured in areahandler",error)

        return{
            status:false,
            data:"internal error"
        }
    }
}





export const checkProfileVerification=async()=>{



    try{
        const cookieStore = await cookies();
        const authToken = cookieStore.get('auth_token')?.value;

        const res=await fetch('http://localhost:3000/api/profile/exists', {
            method: 'GET',
            headers: {
                'Cookie': `auth_token=${authToken}`,
                'Content-Type': 'application/json'
            }
        })

        console.log("Status Code:", res.status);

    
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    // ✅ Parse the response body
    const data = await res.json();



    console.log("Response Body:", data);
    
    return {
        status:data.status,
        data:data.message,
        statusCode:res.status
    }

        // console.log("got resssssssssssponseeeeeeeeeeeeeeeeeeeeeeee",res)


    }catch(err:unknown){
        
          const error=getApiErrorMessage(err)
            
                return {
                  status: false,
                  data: error
                };
        
    }



}