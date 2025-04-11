import { tokenPayload } from "@/src/type/controller_type/token_type"
import jwt from 'jsonwebtoken';


export const createJwtToken = (userDetails:tokenPayload)=>{

    try{

     
      

        const token = jwt.sign(
            { userId: userDetails.id ,email:userDetails.email,role:userDetails.role}, 
            process.env.JWT_SECRET!, 
            { expiresIn: '7d' } 
        );

        console.log("token creating ")
        console.log(token)

        return token



    }catch(error){
        console.log("error occuring while creating token")

        return false
        
    }


}




export const verifyToken =()=>{

}