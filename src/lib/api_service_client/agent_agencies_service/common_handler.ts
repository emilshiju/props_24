import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";
import axiosClient from "../../axios_client";

export const checkEntityVerified = async () => {
  try {
    const resVerified = await axiosClient.get("/agentAgencies/verified");

    return {
      status: resVerified.data.status,
      data: resVerified.data.message,
      statusCode: resVerified.status,
    };
  } catch (err) {
    
    const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};
