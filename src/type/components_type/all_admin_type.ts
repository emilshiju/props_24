


export interface cityType { city:string,  country:string}

export interface cityResType {id: string; cityName: string;country: string;createdAt: Date }

export interface specialisation_Res_Type {id: string; title: string; description: string; createdAt: Date;}



export interface detailedCityType {
    city:string
    about: {
      content: string;
    };
    areas: Array<{
      heading: string;
      content: string;
    }>;
    details: {
      availableProperties: string;
      averagePrice: string;
      description: string;
      popularity: string;
    };
    image: File | null|string;
    types: Array<{
      heading: string;
      content: string;
      price: string; // or number if you prefer
    }>;
  }



  export interface detailedCityReqType {
    city:string
    about: {
      content: string;
    };
    areas: Array<{
      heading: string;
      content: string;
    }>;
    details: {
      availableProperties: string;
      averagePrice: string;
      description: string;
      popularity: string;
    };
    image: string;
    types: Array<{
      heading: string;
      content: string;
      price: string; // or number if you prefer
    }>;
  }







  export interface detailedCityResType {
    id:string,
    city:{cityName:string},
    cityId:string
    aboutContent:string;
    areas: Array<{
      heading: string;
      content: string;
    }>;
    
    availableProperties: string;
    averagePrice: string;
    description: string;
    popularity: string;
    imageUrl: string;
    
    types: Array<{
      heading: string;
      content: string;
      price: string; // or number if you prefer
    }>;
  }





  export interface cityAndDetaield{
    id: string;
    cityName: string;
    country: string;
    createdAt: Date;
    details: detailedCityResType | null
  }