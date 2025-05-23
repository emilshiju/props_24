
 interface user_type {
    id: string;
    userName:string;
    email: string;
    password: string;
    role: string;
    status: boolean;
    createdAt: string;
    
  }


type specialisation ={id: string; title: string; description: string; createdAt: Date;}
  

export interface UserProfileType {
    id: string;
    businessName: string;
    phone: string;
    licenseNumber: string;
    bio: string;
    specialization:specialisation;
    imageUrl: string 
    verified:boolean
    createdAt: Date;
    userId: string;
    user:user_type
  };
  