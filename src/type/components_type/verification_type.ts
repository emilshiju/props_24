
export interface user_type {
    id: string;
    userName:string;
    email: string;
    password: string;
    role: string;
    status: boolean;
    createdAt: string;
    profile:UserProfileType
    
  }
  

 interface UserProfileType {
    id: string;
    businessName: string;
    phone: string;
    licenseNumber: string;
    bio: string;
specialization:{title:string}
    city:{cityName:string}
    imageUrl: string 
    verified:boolean
    createdAt: Date;
    userId: string;
    user:user_type
  };
  