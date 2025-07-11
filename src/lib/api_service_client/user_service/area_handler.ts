import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";
import axiosClient from "../../axios_client";


export const listAllCityApi = async () => {
  try {
    const resAllCity = await axiosClient.get("/admin/city/list");

    return {
      status: resAllCity.data.status,
      data: resAllCity.data.message,
      statusCode: resAllCity.status,
    };
  } catch (err: unknown) {
    // console.log("error occured in listAllCityAPi", error);

    const error=getApiErrorMessage(err)


    return {
      status: false,
      data: error
    };
  }
};
