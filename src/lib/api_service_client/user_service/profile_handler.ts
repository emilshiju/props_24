import { ProfileData } from "@/src/type/validation_type/profilePage_type";
import axiosClient from "../../axios_client";
import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";

export const createProfileApi = async (data: ProfileData, imageUrl: string) => {
  try {
    const updatedValue = {
      ...data,
      imageUrl,
    };

    const resCreateProfileApi = await axiosClient.post(
      "/profile",
      updatedValue
    );

    return {
      status: resCreateProfileApi.data.status,
      message: resCreateProfileApi.data.message,
      statusCode: resCreateProfileApi.status,
    };
  } catch (err) {
    console.log("error occured in createProfileApi", err);

     const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};

export const uploadProfileImageAPi = async (imageUrl: string) => {
  try {
    const resUploadImageAPi = await axiosClient.post("/profile/uploadImage", {
      imageUrl: imageUrl,
    });

    return {
      status: resUploadImageAPi.data.status,
      message: resUploadImageAPi.data.message,
      statusCode: resUploadImageAPi.status,
    };
  } catch (err) {
    
     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

   
  }
};

export const getProfileDetailsApi = async (id: string) => {
  try {
    const resProfielDetailsApi = await axiosClient.get(`/user/view/${id}`);

    return {
      status: resProfielDetailsApi.data.status,
      data: resProfielDetailsApi.data.message,
      statusCode: resProfielDetailsApi.status,
    };
  } catch (err) {
    

     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const getPropertyDetailsApi = async (id: string) => {
  try {
    const resPropertyDetailsApi = await axiosClient.get(`/user/property/${id}`);

    return {
      status: resPropertyDetailsApi.data.status,
      data: resPropertyDetailsApi.data.message,
      statusCode: resPropertyDetailsApi.status,
    };
  } catch (err) {
    
     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};
