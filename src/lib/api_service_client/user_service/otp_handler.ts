import axiosClient from "../../axios_client";

export const requestOtpApi = async (data: string) => {
  try {
    const ress = await axiosClient.post("/otp/generate", { email: data });

    return {
      status: ress.data.status,
      data: ress.data.message,
      statusCode: ress.status,
    };
  } catch (error: any) {
    return {
      status: false,
      data: error?.response?.data?.message ?? "something went wrong ",
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
  } catch (error: any) {
    console.log("error in verifyOTPAPI", error);

    return {
      status: false,
      data: error?.response?.data?.message ?? "something went wrong ",
    };
  }
};
