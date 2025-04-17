import { NextRequest, NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode'
import { extracted_token } from './type/controller_type/token_type';


export function middleware(request: NextRequest) {

    console.log("middleware");
   
    const token = request.cookies.get('auth_token')?.value; // 'token' = cookie name
   
    
    if(token){

      const decoded:extracted_token  = jwtDecode(token);
      console.log("00000000")
      if(decoded.role=='agent'&&request.nextUrl.pathname.startsWith('/afterRegister')||request.nextUrl.pathname.startsWith('/')||request.nextUrl.pathname.startsWith('/verification')){
        // return NextResponse.redirect(new URL('/login', request.url))
      }else{
        // return NextResponse.redirect(new URL('/login', request.url))
      }

    }



    console.log("Token from cookies:", token);


    if(token){

      const decoded:extracted_token  = jwtDecode(token);

      
      console.log("dcoded token")
      console.log(decoded)

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('decoded-token', JSON.stringify(decoded));

      return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
      });


    }
  

    return NextResponse.next();


  }
  