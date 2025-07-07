import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";
import axiosClient from "../../axios_client";


export const requestOtpApi = async (data: string) => {
  try {
    const ress = await axiosClient.post("/otp/generate", { email: data });

    return {
      status: ress.data.status,
      data: ress.data.message,
      statusCode: ress.status,
    };
  } catch (err) {
     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };
  }
};

export const verifyOtpApi = async (otp: string, email: string) => {
  try {
    const resposneVerityOtpApi = await axiosClient.post("/otp/verify", {
      email,
      otp,
    });

    return {
      status: resposneVerityOtpApi.data.status,
      data: resposneVerityOtpApi.data,
      statusCode: resposneVerityOtpApi.status,
    };
  } catch (err) {

     const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};
