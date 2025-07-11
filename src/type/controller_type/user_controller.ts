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








export interface SearchAllUserType {
  allAgent: EntitytProfile[];
  allAgencies:EntitytProfile[];
  allCity: AllCity[];
}



export interface EntitytProfile {
  id: string;
  businessName: string;
  phone: string;
  licenseNumber: string;
  bio: string;
  imageUrl: string|null
  verified: boolean;
  createdAt: Date;
  userId: string;
  specializationId: string;
  cityId: string;
  specialization: Specialization;
  city: AllCity;
  properties: Property[];
  reviews: Review[];
}

export interface Specialization {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

export interface AllCity {
  id: string;
  cityName: string;
  country: string;
  createdAt:Date;
  details?: CityDetails|null
}

export interface CityDetails {
  id: string;
  cityId: string;
  aboutContent: string;
  availableProperties: string;
  averagePrice: string;
  description: string;
  popularity: string;
  imageUrl: string|null
  areas: Array<{ heading: string; content: string }>;
  types: Array<{ heading: string; content: string; price: string }>;
  createdAt: Date;
}

export interface Property {
  id: string;
  name: string;
  price: string;
  room: string;
  bathroom: string;
  sm: string;
  imageUrl: string;
  profileId: string;
  cityId: string;
}

export interface Review {
  id: string;
  rating: number;
  profileId: string;
  name: string;
  content: string;
  createdAt: Date;
}
