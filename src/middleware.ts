import { NextRequest, NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode'
import { extracted_token } from './type/controller_type/token_type';
import { decode } from 'punycode';


const ENTITY_PATHS = ['/featured', '/featured/add', '/featured/list','/createProfile'];

const ADMIN_PATHS=['/admin/']

const PUBLIC_PATHS = ['/'];

const AUTH_PATHS=['/login', '/adminLogin','/register']

const ADMIN_AUTH=['/adminLogin']

const ENTITY_AUTH=['/login','/register']


export function middleware(request: NextRequest) {

    // console.log("hyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");


    const { pathname } = request.nextUrl;
    console.log("got pathname")
    // console.log(pathname)

    const token = request.cookies.get('auth_token')?.value; // 'token' = cookie name


        // Skip middleware for public paths
    if (PUBLIC_PATHS.includes(pathname)) {

      

    }



    if(AUTH_PATHS.includes(pathname)){

       if (!token) {
             return NextResponse.next();
        }

      

        const decoded: extracted_token = jwtDecode(token);

        if(decoded.role=='agencies'||decoded.role=='agent'){
          return NextResponse.redirect(new URL('/featured/add', request.url));
        }else if(decoded.role=='admin'){
          return NextResponse.redirect(new URL('admin/dashboard', request.url));
        }
        
    }

   


    
   
    if (ENTITY_PATHS.includes(pathname)){


      if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
      }

    

      try {
      const decoded: extracted_token = jwtDecode(token);

      // Redirect if not an agent
      const restrictedRoles = ['agent', 'agencies'];

      if (!restrictedRoles.includes(decoded.role)) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      
      return NextResponse.next();

    } catch (err) {
      
      return NextResponse.redirect(new URL('/', request.url));
    }


    }






     if (ADMIN_PATHS.some(path => pathname.startsWith(path))) {
       console.log("get inside inside ",pathname)
        if (!token) {
            return NextResponse.redirect(new URL('/adminLogin', request.url));
        }

        try {
            const decoded: extracted_token = jwtDecode(token);

            if (decoded.role !== 'admin') {
                return NextResponse.redirect(new URL('/adminLogin', request.url));
            }

            
            return NextResponse.next();
        } catch (err) {
            return NextResponse.redirect(new URL('/adminLogin', request.url));
        }
    }






    return NextResponse.next();


  }


    
  


  
  