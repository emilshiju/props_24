


export interface SearchUserResponse {
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
  imageUrl: string;
  verified: boolean;
  createdAt: string;
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
  createdAt: string;
}

export interface AllCity {
  id: string;
  cityName: string;
  country: string;
  createdAt: string;
  details?: CityDetails;
}

export interface CityDetails {
  id: string;
  cityId: string;
  aboutContent: string;
  availableProperties: string;
  averagePrice: string;
  description: string;
  popularity: string;
  imageUrl?: string;
  areas: Array<{ heading: string; content: string }>;
  types: Array<{ heading: string; content: string; price: string }>;
  createdAt: string;
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
  createdAt: string;
}
