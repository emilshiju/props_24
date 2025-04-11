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
  