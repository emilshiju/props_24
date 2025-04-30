

export interface PropertyResType {
    id:string
    name: string;
    price: string;
    room: string;
    city: {id:string,cityName:string}
    bathroom: string;
    sm: string;
    imageUrl:string
  }

  export interface formPropertyType {
    name: string;
    price: string;
    room: string;
    city: string
    bathroom: string;
    sm: string;
    imageUrl:string
  }

  
  export interface editPropertyType {
    id:string;
    name: string;
    price: string;
    room: string;
    city: string 
    bathroom: string;
    sm: string;
    imageUrl:string

  }