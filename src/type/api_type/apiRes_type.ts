


import axios from "axios";

export type ApiErrorResponse = {
  status: boolean | string;
  message: string;
};

export const getApiErrorMessage = (error: unknown): string => {
  
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.message || error.message;
  }

  if (error instanceof Error) {
    console.log(error.message)
  }

  return "Something went wrong.";
};
