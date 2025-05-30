

export interface FormValues {
    role:string,
    userName:string;
    email: string;
    password: string;
    confirmPassword:string
  }

export interface LoginValues {
  role:string,
  email: string;
  password: string;
}

export interface AdminLoginValues {
  role:string;
  email:string;
  password:string
}

export interface confirmEmailValues{
  role:string,
  email: string;
}