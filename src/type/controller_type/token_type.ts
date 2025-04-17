

export interface tokenPayload{
    id: string;
    email: string;
    role: string;
}

export interface extracted_token{
    userId: string,
    email: string,
    role: string,
    iat: number,
    exp: number
  }