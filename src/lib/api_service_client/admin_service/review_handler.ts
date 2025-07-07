import { reviewType } from "@/src/type/components_type/all_admin_type";
import axiosClient from "../../axios_client";
import { getApiErrorMessage } from "@/src/type/api_type/apiRes_type";

export const addReviewAdminApi = async (data: reviewType) => {
  try {
    const ressAddReviewApi = await axiosClient.post("/user/review/add", data);

    return {
      status: ressAddReviewApi.data.status,
      data: ressAddReviewApi.data.message,
      statusCode: ressAddReviewApi.status,
    };
  } catch (err:unknown) {
    
    const error=getApiErrorMessage(err)
    
        return {
          status: false,
          data: error
        };

  }
};

export const listAllReviewApi = async () => {
  try {
    const allReview = await axiosClient.get("/user/review");

    return {
      status: allReview.data.status,
      data: allReview.data.message,
      statusCode: allReview.status,
    };
  } catch (err: unknown) {
    
    const error=getApiErrorMessage(err)

    return {
      status: false,
      data: error
    };
  }
};

export const deleteReviewApi = async (id: string) => {
  try {
    const ress = await axiosClient.delete(`/user/review/${id}/delete`);

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
