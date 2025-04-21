export interface resListUsers{status:boolean,data:any,statusCode?: number}

export interface singeUser {
    id: string;
    email: string;
    password: string;
    role: string;
    status: boolean;
    createdAt: string; 
  }



  interface profile_type {
    id: string;
    userName: string;
    phone: string;
    licenseNumber: string;
    bio: string;
    specialisation: string;
    imageUrl: string;
    createdAt: string;
    userId: string;
  }
  
  export interface user_type {
    id: string;
    email: string;
    password: string;
    role: string;
    status: boolean;
    createdAt: string;
    profile?: profile_type;
  }
  