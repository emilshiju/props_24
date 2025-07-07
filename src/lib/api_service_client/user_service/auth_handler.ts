import { FormValues, LoginValues } from "@/src/type/validation_type/formTypes";
import axiosClient from "../../axios_client";
import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";

export const registerUserApi = async (userDetails: FormValues) => {
  try {
    const responseRegisterUsrApi = await axiosClient.post("/register", {
      userDetails,
    });

    return {
      status: responseRegisterUsrApi.data.status,
      data: responseRegisterUsrApi.data,
      statusCode: responseRegisterUsrApi.status,
    };
  } catch (err) {
    
     const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};

export const loginUserApi = async (userData: LoginValues) => {
  try {
    const loginUserAPi = await axiosClient.post("/login", { userData });

    return {
      status: loginUserAPi.data.status,
      data: loginUserAPi.data.message,
      statusCode: loginUserAPi.status,
    };
  } catch (err) {
    
     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const checkEmailApi = async (data: string) => {
  try {
    const ress = await axiosClient.post("/register/email", { email: data });

    return {
      status: ress.data.status,
      data: ress.data.message,
      statusCode: ress.data,
    };
  } catch (err) {
    
     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const logoutApi = async () => {
  try {
    const ress = await axiosClient.get("/logout");

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
