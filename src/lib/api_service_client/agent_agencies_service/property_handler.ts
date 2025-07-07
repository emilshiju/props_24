import { PropertyType } from "@/src/type/validation_type/propertyType";
import axiosClient from "../../axios_client";
import {
  formPropertyType,

} from "@/src/type/api_type/common_type";
import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";


export const addPropertyApi = async (data: PropertyType, imageUrl: string) => {
  try {
    const allData = {
      ...data,
      imageUrl,
    };

    console.log("the full allData");
    console.log(allData);

    const resAddPropertyApi = await axiosClient.post(
      "/agentAgencies/property/add",
      allData
    );

    return {
      status: resAddPropertyApi.data.status,
      data: resAddPropertyApi.data.message,
      statusCode: resAddPropertyApi.status,
    };
  } catch (err) {
    
    const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};

export const listAllPropertyApi = async () => {
  try {
    const resAllProperty = await axiosClient.get(
      "/agentAgencies/property/list"
    );

    return {
      status: resAllProperty.data.status,
      data: resAllProperty.data.message,
      statusCode: resAllProperty.status,
    };
  } catch (err) {
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };
  }
};

export const findSinglePropertyAPi = async (id: string) => {
  try {
    const resFindSinglePropertyApi = await axiosClient.get(
      `/agentAgencies/property/${id}/detailedView`
    );

    return {
      status: resFindSinglePropertyApi.data.status,
      data: resFindSinglePropertyApi.data.message,
      statusCode: resFindSinglePropertyApi.status,
    };
  } catch (err) {
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };
  }
};

export const editProperetyApi = async (data: formPropertyType, id: string) => {
  try {
    const updatedData = { ...data, id };

    const resEdited = await axiosClient.put(
      "/agentAgencies/property/edit",
      updatedData
    );

    return {
      status: resEdited.data.status,
      data: resEdited.data.message,
      statusCode: resEdited.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const deletePropertyApi = async (id: string) => {
  try {
    const deleted = await axiosClient.delete(
      `/agentAgencies/property/${id}/delete`
    );

    return {
      status: deleted.data.status,
      data: deleted.data.message,
      statusCode: deleted.status,
    };
  } catch (err) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};
