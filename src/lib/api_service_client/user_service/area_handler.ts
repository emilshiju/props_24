import axiosClient from "../../axios_client";

export const listAllCityApi = async () => {
  try {
    const resAllCity = await axiosClient.get("/admin/city/list");

    return {
      status: resAllCity.data.status,
      data: resAllCity.data.message,
      statusCode: resAllCity.status,
    };
  } catch (error: any) {
    console.log("error occured in listAllCityAPi", error);

    return {
      status: false,
      data: error?.response?.data?.message ?? "something went wrong ",
    };
  }
};
