


'use client'
import { useState ,useRef,useEffect } from 'react'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { FormValues } from '@/src/type/validation_type/formTypes';
import registerSchema from '@/src/util/validation/register_schema';
import axiosClient from '@/src/lib/axios_client';
import { requestOtpApi, verifyOtpApi } from '@/src/lib/api_service_client/user_service/otp_handler';
import { toast } from 'react-hot-toast';
import { checkEmailApi, registerUserApi } from '@/src/lib/api_service_client/user_service/auth_handler';

import { useRouter } from 'next/navigation';
import Loader from '@/src/components/loader';


const Register = ()=>{

     const router = useRouter();



      const [allFormData, setAllFormData] = useState<FormValues>({userName:'',email:'', password: '',confirmPassword:'',role:''});
      const [otpVerification,setOtpVerification]=useState<Boolean>(false)
      const [resendOtp, setResendOtp] = useState(false);
      const [timeLeft, setTimeLeft] = useState<number>(0);
      const timeRef = useRef<NodeJS.Timeout | null>(null);


      const [showLoader,setLoader]=useState(false)
       


      const sendOtp=async(email:string)=>{
       

        const ressOtp=await requestOtpApi(email)

        if(ressOtp.status){
          toast.success(ressOtp.data)
        }else{
          toast.error(ressOtp.data)
        }
         
      }
     

      const handleResendOtp = (email: string = allFormData.email) => {
        
        setTimeLeft(60);
        setResendOtp(false);
        sendOtp(email)
      };


     

      const initialValues: FormValues = { userName:"", email: '', password: '',confirmPassword:'',role:'agent' };




      const handleSubmit = async(values_data:FormValues,formikHelpers: FormikHelpers<FormValues>) =>{


        const ress=await checkEmailApi(values_data.email)
        
        if(ress.status){

        
        setAllFormData({userName:values_data.userName,email:values_data.email,password:values_data.password,confirmPassword:values_data.confirmPassword,role:values_data.role})

       
        setOtpVerification(true)
        handleResendOtp(values_data.email)


        formikHelpers.resetForm();

        }else{
          toast.error(ress.data)
        }

    

      }




      const [digits, setDigits] = useState<string[]>(["", "", "", ""]); 
      const inputRefNext = useRef<(HTMLInputElement | null)[]>([]);

      const onSetDigit = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newDigits = [...digits];
        let value = e.target.value;
        newDigits[index] = value;
        setDigits(newDigits);
        if (value && inputRefNext.current && index < inputRefNext.current.length - 1) {
          inputRefNext.current[index + 1]?.focus();
        }
      };

    

      useEffect(() => {
        
       
        
        if (timeLeft > 0) {
          timeRef.current = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
          }, 1000);
        } else {
          setResendOtp(true);
        }
    
        return () => {
          if (timeRef.current) {
          
            clearInterval(timeRef.current);
          }
        };
      }, [timeLeft]);


     

    
     



      const afterOtpSubmit = async()=>{


        let otp = digits.join("");

        if(otp.length == 0){
          toast.error('ENTER THE OTP');
        }else{
            setLoader(true)

          const verified = await verifyOtpApi(otp,allFormData.email) 

            setLoader(false)

          if(!verified.status){
            const errorMessage = verified.data?.message || 'Failed to verify OTP';
            toast.error(errorMessage);
          }else{

            const registered = await registerUserApi(allFormData)
            if(!registered.status){
              const errorMessage = registered.data?.message 
              toast.error(errorMessage);
            }else{

              router.push('/afterRegister')
              
            }


          }

        }



      }







      
    




    


    return (
      <>
      {showLoader&&<Loader />}
        {!otpVerification ?<div className="min-h-[80vh] flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8"> 
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
    Register your account
    </h2>
    
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    
      <Formik 
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
      >
       {({ values, handleChange, errors, touched }) => (
      <Form
      className="space-y-6" >

      
    <div>
      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
        Choose your role
      </label>
      <div className="relative">
        <Field
          as="select"
          id="role"
          name="role"
          className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-700 bg-white appearance-none"
        >
          <option value="agent">I am an Agent</option>
          <option value="agencies">I represent an Agency</option>
        </Field>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <div>
          <label  className="block text-sm font-medium text-gray-700">
          user Name
          </label>
          <div >
            <Field
              id="userName"
              name="userName"
              type="text"
              value={values.userName}
              onChange={handleChange}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm text-black"
            />
            <div className="h-1">
            {errors.userName && touched.userName ? <div className="text-red-500 text-xs mt-1 ">{errors.userName}</div> : null}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-mail address
          </label>
          <div >
            <Field
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm text-black"
            />
            <div className="h-1">
            {errors.email && touched.email ? <div className="text-red-500 text-xs mt-1 ">{errors.email}</div> : null}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
          </label>
          <div >
            <Field
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm text-black"
            />
            <div className='h-1' >
            {errors.password && touched.password ? <div className="text-red-500 text-xs mt-1">{errors.password}</div> : null}
            </div>
          </div>
        </div>


        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          confirmPassword
          </label>
          <div >
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
            onChange={handleChange}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm text-black"
            />
            <div className='h-1' >
            {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-500 text-xs mt-1">{errors.confirmPassword}</div> : null}
            </div>
          </div>
        </div>


        <div className="flex justify-end">
         

          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"

            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 "
          >
            sign up
          </button>
        </div>
      </Form>
  )}
      
</Formik>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Don't have an account?</span>
          </div>
        </div>

      </div>
    </div>
    </div>
  </div>:
  
  
  <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
          <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-semibold text-3xl">
                  <p>Email Verification</p>
                </div>
                <div className="flex flex-row text-sm font-medium text-gray-400">
                  <p>We have sent a code to your email emilshiju10@gmail.com</p>
                </div>
              </div>

              <div>
                <div className="flex flex-col space-y-16">
                  
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    {digits.map((digit, index) => (
                      <div className="w-16 h-16" key={index}>
                        <input
                          
                          ref={(el) => {(inputRefNext.current[index] = el)}}
                          className="w-full h-full text-black flex flex-col items-center justify-center text-center px-0 py-0 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          value={digit}
                          onChange={(e) => onSetDigit(e, index)} // Pass index to identify which digit to update
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-600 hover:bg-blue-900 border-none text-white text-sm shadow-sm"
                        onClick={afterOtpSubmit}
                      >
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't receive code?</p>
                      {resendOtp && (
                        <p
                          className="flex flex-row items-center text-blue-600"
                          onClick={()=>handleResendOtp()}
                        >
                          Resend
                        </p>
                      )} 
                      {!resendOtp && (
                        <p className="flex flex-row items-center text-blue-600">
                          {timeLeft}
                        </p>
                      )} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        }
  </>

    )
}


export default Register