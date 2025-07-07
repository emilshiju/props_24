import { AdminLoginValues } from "@/src/type/validation_type/formTypes";
import axiosClient from "../../axios_client";
import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";


export const adminLoginApi = async (data: AdminLoginValues) => {
  try {
    const resAdminLoginApi = await axiosClient.post("/login", {
      userData: data,
    });

    return {
      status: resAdminLoginApi.data.status,
      data: resAdminLoginApi.data.message,
      statusCode: resAdminLoginApi.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};
