import axiosClient from "../../axios_client"





export const requestOtpApi=(data:string)=>{

    try{

        axiosClient.post('/otp/generate',{email:data})
        

    }catch(error){

    }

}

export const verifyOtpApi=async(otp:string,email:string)=>{

    try{

       const resposneVerityOtpApi = await axiosClient.post('/otp/verify',{email,otp})

       return {
        status:resposneVerityOtpApi.data.status,
        data:resposneVerityOtpApi.data,
        statusCode:resposneVerityOtpApi.status
      }

    }catch(error){

        console.log("error in verifyOTPAPI",error)

        return {
            status:false,
            data:{message:"Failed to verify OTP"}
        }

    }

}