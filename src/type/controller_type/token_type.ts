

export interface tokenPayload{
    id: string;
    email: string;
    role: string;
}

type Role = 'admin' | 'user' | 'agent' | 'agencies';
export interface extracted_token{
    userId: string,
    email: string,
    role: Role,
    iat: number,
    exp: number
  }