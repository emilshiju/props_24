import { NextRequest, NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode'
import { extracted_token } from './type/controller_type/token_type';



const ENTITY_PATHS = ['/featured', '/featured/add', '/featured/list','/createProfile','/afterRegister']

const ADMIN_PATHS=['/admin/']


const AUTH_PATHS=['/login', '/adminLogin','/register']



export function middleware(request: NextRequest) {

    
    const { pathname } = request.nextUrl;
    

    const token = request.cookies.get('auth_token')?.value; 





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


    
  


  
  