
 interface user_type {
    id: string;
    email: string;
    password: string;
    role: string;
    status: boolean;
    createdAt: string;
    
  }
  

export interface UserProfileType {
    id: string;
    userName: string;
    phone: string;
    licenseNumber: string;
    bio: string;
    specialisation: string;
    imageUrl: string 
    createdAt: Date;
    userId: string;
    user:user_type
  };
  