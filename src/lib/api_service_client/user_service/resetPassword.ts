import {
  confirmEmailValues,
  resetPasswordValues,
} from "@/src/type/validation_type/formTypes";
import axiosClient from "../../axios_client";
import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";

export const confirmEmailApi = async (data: confirmEmailValues) => {
  try {
    const ress = await axiosClient.post("/resetPassword/verify", data);

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

export const changePasswordApi = async (
  data: resetPasswordValues,
  token: string
) => {
  try {
    const changed = await axiosClient.put("/resetPassword", { data, token });

    return {
      status: changed.data.status,
      data: changed.data.message,
      statusCode: changed.status,
    };
  } catch (err) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };
  }
};
