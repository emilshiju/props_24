import { UserDetails } from "@/src/type/api_type/user_type";
import prisma from "../prisma_client";
import { VerifyOTPResponse } from "@/src/type/controller_type/user_controller";





export async function registerUser(details:UserDetails){

    try {
        const user = await prisma.user.create({
          data: {
            email: details.email,
            password: details.password,
            role:details.role,
          },
        });
        console.log("User registered successfully:", user);
      } catch (error) {
        console.error("Error registering user:", error);
      }

}

export async function otpRegister(email:string,otp:string):Promise<boolean> {


  try{

    console.log("otp register")
    console.log(email,otp)

      await prisma.otp.deleteMany({where: { email: email }});
    


    const register = await prisma.otp.create({data:{email:email,otp:otp}})

    return true


  }catch(error){

    console.error("Error in otp register:", error);

    return false


  }


}

export async function verifyOTP(email:string,otp:string):Promise<VerifyOTPResponse> {


  try{

    const otpRecord = await prisma.otp.findFirst({
      where: {
        email: email, 
        otp: otp      
      }
  })
  
  if(otpRecord){

      return {status:true ,found:true}
  }else{
      return {status:true,found:false}
  }




  }catch(error){

    console.error("Error in verify otp:", error);

    return {status:false}

  }


  
}