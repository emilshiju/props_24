import { NextRequest, NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode'


export function middleware(request: NextRequest) {

    console.log("middleware");
   
    const token = request.cookies.get('auth_token')?.value; // 'token' = cookie name

    if(token){

      const decoded = jwtDecode(token);
      console.log("dcoded token")
      console.log(decoded)

    }


    console.log("Token from cookies:", token);

    return NextResponse.next();


  }
  