export interface VerifyOTPResponse {
    status: boolean;
    found?: boolean;  

  }


  export interface registeredUser {
    id: string;          
    email: string;      
    password: string;    
    role:'admin'|'user'|'agent'|'agencies'
    status: boolean;     
    createdAt: Date;     
  }
  



  

export interface profileType {
  businessName: string;
  phone: string;
  licenseNumber: string;
  bio: string;
  specialization: string;
  city:string;
  imageUrl:string
}



export interface LoginType {role:"admin" | "user" | "agent" | "agencies",email:string,password:string}



export type Role = 'admin' | 'user' | 'agent' | 'agencies';
