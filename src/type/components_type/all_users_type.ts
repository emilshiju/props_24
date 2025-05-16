

export interface reviewValidationType{
    name: string;
    content: string;
   
}

export interface reviewReqType {
  rating: number;
  profileId: string;
  name: string;
  content: string;
}



export interface reviewResType {
  id: string;
  rating: number;
  profileId: string;
  name: string;
  content: string;
  createdAt: string;
}
