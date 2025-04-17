
export  interface UserDetails {
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