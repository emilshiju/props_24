import { UserDetails } from "@/src/type/api_type/user_type";
import prisma from "../prisma_client";
import { profileType, registeredUser, VerifyOTPResponse } from "@/src/type/controller_type/user_controller";
import { v4 as uuidv4 } from 'uuid';




export async function registerUser(details:UserDetails):Promise<{status:boolean,user?: registeredUser }>{

    try {
        let  user = await prisma.user.create({
          data: {
            email: details.email,
            password: details.password,
            role:details.role,
          },
        });
        console.log("User registered successfully:", user);

        

        return {status:true,user: {
          ...user,
          id: user.id.toString()  
        }}

        
      } catch (error) {

        console.error("Error registering user:", error);

        return {status:false}
        
      }

}



export async function otpRegister(email:string,otp:string):Promise<boolean> {


  try{

    console.log("otp register")
    console.log(email,otp)

    const existingOtp = await prisma.otp.findFirst({
      where: { email: email },
    });
    
    if(existingOtp){  await prisma.otp.deleteMany({where: { email: email }})  }
    


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


export async function createProfile(userId:string,profileDetails:profileType){


  try{

    console.log("0000000000000000000000000000")
    console.log(userId,profileDetails)


    const created = await prisma.profile.create({data:{userId:userId,userName:profileDetails.userName,phone:profileDetails.phone,licenseNumber:profileDetails.licenseNumber, bio:profileDetails.bio,specialisation:profileDetails.specialization}})

    console.log("created")
    console.log(created)

    return true
     


  }catch(error){
    console.log("error occured increate profile ",error)

    return false
  }

}


export async function uploadProfileImageUrl(userId:string,imageUrl:string){

  try{

    const updatedProfile = await prisma.profile.update({
      where: { userId },
      data: { imageUrl },
    });


    console.log("Image URL updated:", updatedProfile);


    return true


  }catch(error){
    console.log("error occured in the uploadProfileImageUlrl",error)

    return false
  }

}



export async function  loginUser(loginDetails:{role:string,email:string,password:string}){

  try{


    console.log("loginuser",loginDetails)



    const user = await prisma.user.findFirst({
      where: {
        email:loginDetails.email,
        password:loginDetails.password,
      },
    });
     console.log("got ittt",user)


    if(!user){
      return {status:false,message:"credentails not found"}
    }

    return {status:true,message:"sucess"}


  }catch(error){
    console.log("error occured in the loginUser",error)

    return {status:false,message:"occured error"}
  }
}