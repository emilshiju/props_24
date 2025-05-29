

export interface property_type {
    id: string;
    name: string;
    price: string;
    room: string;
    bathroom: string;
    sm: string;
    imageUrl: string;
  
    profileId: string;
    city:{ cityName:string};
  }
  
  type City = {
    id: string;
    cityName: string;
    country: string;
    createdAt: Date;
  };

  
  type Specialization = {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
  };

  interface Review {
  id: string;
  rating: number;
  profileId: string;
  name: string;
  content: string;
  createdAt: string; 
}
  

  export interface agent_agencies {
    id: string;
  businessName: string;
  phone: string;
  licenseNumber: string;
  bio: string;
  imageUrl: string;
  verified: boolean;
  createdAt: Date;
  userId: string;
  specializationId: string;
  cityId: string;
  city: City;
  specialization: Specialization;
  reviews: Review[];
  }


  interface user_type {
    id: string;
    userName:string;
    email: string;
    password: string;
    role: string;
    status: boolean;
    createdAt: string;
    
  }

  export interface detailed_profile_type{
    
        id: string;
        businessName: string;
        phone: string;
        licenseNumber: string;
        bio: string;
        specialization:{title:string};
        city:{cityName:string};
        imageUrl: string 
        verified:boolean
        createdAt: Date;
        userId: string;
        user:user_type;
          _count: {
    reviews: number;
  };
  }