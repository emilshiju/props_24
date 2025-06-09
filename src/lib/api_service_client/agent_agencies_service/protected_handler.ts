import axiosClient from "../../axios_client";

export const profileExistsApi = async () => {
  try {
    const ress = await axiosClient.get("/profile/exists");

    return {
      status: ress.data.status,
      data: ress.data.message,
      statusCode: ress.status,
    };
  } catch (error: any) {
    console.log("error occured in the profileExistsApi", error);

    return {
      status: error?.response?.data?.status ?? "error",
      data: error?.response?.data?.message ?? "something went wrong ",
      statusCode: error?.response?.status ?? 500,
    };
  }
};
