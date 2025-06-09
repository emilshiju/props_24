import { AdminLoginValues } from "@/src/type/validation_type/formTypes";
import axiosClient from "../../axios_client";

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
  } catch (error: any) {
    console.log("admin login api error", error);

    return {
      status: false,
      data: error.response.data.message ?? "error occured try again later",
    };
  }
};
