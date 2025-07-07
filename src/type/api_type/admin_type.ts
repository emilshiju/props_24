// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface resListUsers{status:boolean,data:any,statusCode?: number}

export interface singeUser {
    id: string;
    userName:string;
    email: string;
    password: string;
    role: string;
    status: boolean;
    createdAt: string; 
  }



  interface profile_type {
    id: string;
    businessName: string;
    phone: string;
    licenseNumber: string;
    bio: string;
    specialisation: string;
    imageUrl: string;
    verified:boolean
    createdAt: string;
    userId: string;
  }
  
  export interface user_type {
    id: string;
    userName:string;
    email: string;
    password: string;
    role: string;
    status: boolean;
    createdAt: string;
    profile?: profile_type;
  }
  


  export interface specialisation_Type{
    title:string
    description:string
  }