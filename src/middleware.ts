import { NextRequest, NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode'


export function middleware(request: NextRequest) {

    console.log("middleware");
   
    const token = request.cookies.get('auth_token')?.value; // 'token' = cookie name

    if(token){

      const decoded = jwtDecode(token);
      console.log("dcoded token")
      console.log(decoded)

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-decoded-token', JSON.stringify(decoded));

      return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
      });


    }


    console.log("Token from cookies:", token);

    return NextResponse.next();


  }
  