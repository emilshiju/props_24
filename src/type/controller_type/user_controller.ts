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
  userName: string;
  phone: string;
  licenseNumber: string;
  bio: string;
  specialization: string;
}


