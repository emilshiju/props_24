import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";
import axiosClient from "../../axios_client";
import { FilterSection_Type } from "@/src/type/components_type/filter_type";

export const getAllAgentApi = async () => {
  try {
    const resAllAgentApi = await axiosClient.get("/user/agent");

    return {
      status: resAllAgentApi.data.status,
      data: resAllAgentApi.data.message,
      statusCode: resAllAgentApi.status,
    };
  } catch (err) {

     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const getAllAgenciesApi = async () => {
  try {
    const resAllAgenciesApi = await axiosClient.get("/user/agencies");

    return {
      status: resAllAgenciesApi.data.status,
      data: resAllAgenciesApi.data.message,
      statusCode: resAllAgenciesApi.status,
    };
  } catch (err:unknown) {

     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};
export const getSideBarFilterAPi = async () => {
  try {
    const resGetFilterAPi = await axiosClient.get("/user/filter");

    return {
      status: resGetFilterAPi.data.status,
      data: resGetFilterAPi.data.message,
      statusCode: resGetFilterAPi.status,
    };
  } catch (err) {

     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const getChangedSideBarFilterApi = async ({
  updatedSideBarFilter,
  sectionName,
  value,
  status,
  item,
}:{

  updatedSideBarFilter: FilterSection_Type[];
  sectionName: string;
  value: string;
  status: boolean; 
  item: string;  

}) => {
  try {
    console.log(
      "come in hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      updatedSideBarFilter
    );

    const filtered_res = await axiosClient.post("/user/filter", {
      sideBarFilteredData:updatedSideBarFilter,
      sectionName,
      currentData:value,
      status,
      item,
    });

    return {
      status: filtered_res.data.status,
      data: filtered_res.data.message,
      statusCode: filtered_res.status,
    };
  } catch (err) {
   
     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const getAll = async () => {
  try {
    const allList = await axiosClient.get("/user/list");

    return {
      status: allList.data.status,
      data: allList.data.message,
      statusCode: allList.status,
    };
  } catch (err) {

     const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };

  }
};

export const getAllSearchedListApi = async (value: string) => {
  try {
    console.log("poyii");

    const resAllSearchedListApi = await axiosClient.post("/user/search", {
      data: value,
    });

    return {
      status: resAllSearchedListApi.data.status,
      data: resAllSearchedListApi.data.message,
      statusCode: resAllSearchedListApi.data,
    };
  } catch (err) {

     const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};

export const getAllDataApi = async () => {
  try {
  } catch (error) {
    console.log("error occur in getAllData", error);
  }
};
