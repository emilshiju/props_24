import { specialisation_Type } from "@/src/type/api_type/admin_type";
import axiosClient from "../../axios_client";
import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";

export const addSpecializationApi = async (data: specialisation_Type) => {
  try {
    const resAddSpecializationApi = await axiosClient.post(
      "/admin/specialization/add",
      data
    );

    return {
      status: resAddSpecializationApi.data.status,
      data: resAddSpecializationApi.data.message,
      statusCode: resAddSpecializationApi.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};

export const listSpecializationApi = async () => {
  try {
    const ress = await axiosClient.get("/admin/specialization");

    return {
      status: ress.data.status,
      data: ress.data.message,
      statusCode: ress.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const deleteSpecializationApi = async (id: string) => {
  try {
    const deleted = await axiosClient.delete(
      `/admin/specialization/${id}/delete`
    );

    return {
      status: deleted.data.status,
      data: deleted.data.message,
      statusCode: deleted.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};
