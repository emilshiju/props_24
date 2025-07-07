
import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";
import axiosClient from "../../axios_client";



export const listAllUsersApi = async () => {
  try {
    const reslistAllUsersApi = await axiosClient.get("admin/users/list_users");

    return {
      status: reslistAllUsersApi.data.status,
      data: reslistAllUsersApi.data.message,
      statusCode: reslistAllUsersApi.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};

export const getSingleUserDetailsApi = async (userId: string) => {
  try {
    const resgetSingleUserDetailsApi = await axiosClient.get(
      `admin/users/userDetails/${userId}`
    );

    return {
      status: resgetSingleUserDetailsApi.data.status,
      data: resgetSingleUserDetailsApi.data.message,
      statusCode: resgetSingleUserDetailsApi.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const blockUserApi = async (userId: string) => {
  try {
    const resBlockUserApi = await axiosClient.patch("/admin/block", {
      userId: userId,
    });

    return {
      status: resBlockUserApi.data.status,
      data: resBlockUserApi.data.message,
      statusCode: resBlockUserApi.status,
    };
  } catch (err:unknown) {
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };
  }
};

export const unblockUserApi = async (userId: string) => {
  try {
    const resUnBlockUserAPi = await axiosClient.patch("/admin/unblock", {
      userId: userId,
    });

    return {
      status: resUnBlockUserAPi.data.status,
      data: resUnBlockUserAPi.data.message,
      statusCode: resUnBlockUserAPi.status,
    };
  } catch (err:unknown) {
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };
  }
};
