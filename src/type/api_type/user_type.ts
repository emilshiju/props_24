import { AxiosError } from "axios";

export  interface UserDetails {
    userName:string;
    email: string;
    password: string;
    confirmPassword:string
    role:'admin'|'user'|'agent'|'agencies'
  }
  
  export interface createProfileRes {
    status: boolean;
    message: string;
    statusCode?: number;
  }

type ApiErrorResponse = {
  status: boolean | string; 
  message: string;
}

export type TypedApiError = AxiosError<ApiErrorResponse>;