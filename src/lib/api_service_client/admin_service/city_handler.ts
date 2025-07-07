import {
  cityType,
  detailedCityReqType,
} from "@/src/type/components_type/all_admin_type";
import axiosClient from "../../axios_client";
import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";

export const addCityApi = async (data: cityType) => {
  try {
    const resAddCitieApi = await axiosClient.post("/admin/city/add", data);

    return {
      status: resAddCitieApi.data.status,
      data: resAddCitieApi.data.message,
      statusCode: resAddCitieApi.status,
    };
  } catch (err: unknown) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const listCityApi = async () => {
  try {
    const resListCitieApi = await axiosClient.get("/admin/city/list");

    return {
      status: resListCitieApi.data.status,
      data: resListCitieApi.data.message,
      statusCode: resListCitieApi.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const singleCityDisplayApi = async (cityId: string) => {
  try {
    const resSingleCityDisplayApi = await axiosClient.get(
      `/admin/city/${cityId}/detailedView`
    );

    return {
      status: resSingleCityDisplayApi.data.status,
      data: resSingleCityDisplayApi.data.message,
      statusCode: resSingleCityDisplayApi.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const editCityApi = async (cityId: string, data: cityType) => {
  try {
    const resEditCityApi = await axiosClient.post("/admin/city/edit", {
      id: cityId,
      data: data,
    });

    return {
      status: resEditCityApi.data.status,
      data: resEditCityApi.data.message,
      statusCode: resEditCityApi.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const deleteCityApi = async (cityId: string) => {
  try {
    const resDeleteCitieApi = await axiosClient.delete(
      `/admin/city/${cityId}/delete`
    );

    return {
      status: resDeleteCitieApi.data.status,
      data: resDeleteCitieApi.data.message,
      statusCode: resDeleteCitieApi.status,
    };
  } catch (err:unknown) {
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const cityDetailsApi = async (data: detailedCityReqType) => {
  try {
    const resCityDetailsApi = await axiosClient.post(
      "/admin/city/detailed/add",
      data
    );

    return {
      status: resCityDetailsApi.data.status,
      data: resCityDetailsApi.data.message,
      statusCode: resCityDetailsApi.status,
    };
  } catch (err:unknown ) {
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };
  }
};

export const listCityDetailsApi = async () => {
  try {
    const resListCityDetailsApi = await axiosClient.get(
      "/admin/city/detailed/list"
    );

    return {
      status: resListCityDetailsApi.data.status,
      data: resListCityDetailsApi.data.message,
      statusCode: resListCityDetailsApi.status,
    };
  } catch (err:unknown) {
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };
  }
};

export const detailedViewCityApi = async (id: string) => {
  try {
    const resDetailedViewCityApi = await axiosClient.get(
      `/admin/city/detailed/${id}/view`
    );

    return {
      status: resDetailedViewCityApi.data.status,
      data: resDetailedViewCityApi.data.message,
      statusCode: resDetailedViewCityApi.status,
    };
  } catch (err: unknown) {

    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

    
  };
}

export const editDetailedCityApi = async (
  id: string,
  data: detailedCityReqType
) => {
  try {
    const resEditDetailedCityAPi = await axiosClient.post(
      "/admin/city/detailed/edit",
      { id: id, data: data }
    );

    return {
      status: resEditDetailedCityAPi.data.status,
      data: resEditDetailedCityAPi.data.message,
      statusCode: resEditDetailedCityAPi.status,
    };
  } catch (err: unknown) {
    
    const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};
