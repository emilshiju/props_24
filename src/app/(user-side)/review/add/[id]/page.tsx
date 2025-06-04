"use client"

import { getProfileDetailsApi } from '@/src/lib/api_service_client/user_service/profile_handler';
import { detailed_profile_type } from '@/src/type/components_type/common_type';
import React, { useEffect,use, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import {  userReviewSchema } from '@/src/util/validation/review_scehma';
import { reviewReqType, reviewValidationType } from '@/src/type/components_type/all_users_type';
import { addReviewDetailsApi } from '@/src/lib/api_service_client/user_service/review_handler';
import toast from 'react-hot-toast';
import Loader from '@/src/components/loader';
import ReviewFormSkeleton from '@/src/components/user/review_skeleton';


const AddReview = ({params}:{ params: Promise<{ id: string }> }) => {


  const { id } = use(params)


  const [allData,setData]=useState<detailed_profile_type|null>()

  const [allStar, setStar] = useState<boolean[]>([false, false, false, false,false]);

  const [showLoader,setLoader]=useState(false)


  const onClickReviewStar=(index:number)=>{

    setStar(prev => {
    const updated = [...prev];
    updated[index] = true;
    return updated;
  });


  }


  const [currentRatingValue,setRatingValue]=useState(0)


  const fetchProfileDetails=async(id:string)=>{
    // setLoader(true)
    const response = await getProfileDetailsApi(id)
    // setLoader(false)

        if(response.status){
          setData(response.data)
        }else{
          toast.error(response.data)
        }

  }



  useEffect(()=>{
    fetchProfileDetails(id)

  },[])
  

  const initialValues={name:"",content:""}

  const handleSubmit=async(values_data:reviewValidationType,formikHelpers: FormikHelpers<reviewValidationType>)=>{
  
    setLoader(true)

    const totalTrue = allStar.filter(val => val).length;
   
    const ress=await addReviewDetailsApi(values_data,totalTrue,id)

    setLoader(false)

    if(ress.status){
      formikHelpers.resetForm();
      setStar([false, false, false, false,false])
      
      toast.success(ress.data)
    }else{
      toast.error(ress.data)
    }


  }

  if(!allData){
    return <><ReviewFormSkeleton  /></>
  }


  return (


    <>
    {showLoader&&<Loader  />}

    <div className="min-h-screen flex flex-col items-center justify-start py-6 sm:py-14 bg-white mx-auto px-4">
  <div className="w-full max-w-6xl">
    <h1 className="text-3xl md:text-4xl font-bold text-black text-start mb-8 md:mb-12 leading-tight">
      Tell us, how was <br /> your experience ?
    </h1>

    <Formik 
            initialValues={initialValues}
            validationSchema={userReviewSchema}
            onSubmit={handleSubmit}

      >{({ values, handleChange, errors, touched }) => (
    <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
      {/* Left side - Image and details */}
      <div className="w-full lg:w-auto lg:flex-shrink-0">
        <div className="bg-white shadow border border-gray-300 rounded-md p-4 md:p-6 flex flex-col items-center w-full lg:w-66 h-auto lg:h-86">
          <img
            src={allData?.imageUrl}
            alt="Pantheon"
            className="w-full h-48 md:h-64 object-cover mb-4"
          />
          <div className="w-full text-center lg:text-left">
            <h2 className="text-lg md:text-xl font-bold text-black mb-1">{allData?.businessName}</h2>
            {/* <p className="text-gray-600 text-sm md:text-base"></p> */}
            <p className="text-gray-600 text-sm md:text-base">{allData?.city.cityName} , Italy</p>
          </div>
        </div>
      </div>

      {/* Vertical line - hidden on mobile */}
      <div className="hidden lg:block w-px ml-0 lg:ml-12 min-h-[500px] bg-gray-400"></div>

      {/* Right side - Form */}
      <div className="w-full lg:flex-grow">




        <Form className="w-full p-4 md:p-6 bg-white rounded-lg">



            <div className="mb-4 md:mb-6">
  <label htmlFor="name" className="text-base md:text-lg font-medium mb-2 md:mb-3 block">
    What's your name?
  </label>
  <Field
    type="text"
    id="name"
    name="name"
   
    placeholder="Write your name"
    className="w-full px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <div className="h-1">
                {errors.name&&touched.name ?<div className="text-red-500 text-xs mt-1 ">{errors.name}</div>:null}
            </div>
</div>
 





          <div className="mb-4 md:mb-6">
  <h2 className="text-base md:text-lg font-medium mb-2 md:mb-3">
    How would you rate your experience?
  </h2>
  <div className="flex items-center space-x-1">
    
    {allStar.map((data, index) => (
        data?(<svg
          key={index}
          className="w-8 h-8 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>):<svg
        key={index}
        onClick={()=>onClickReviewStar(index)}
        className="w-8 h-8 ms-1 text-gray-300 dark:text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      ))}
      


  </div>
</div>




          <div className="mb-4 md:mb-6">
            <h2 className="text-base md:text-lg font-medium mb-2 md:mb-3">Write your review</h2>
            <Field
              name="content"
              component="textarea"
              rows={4}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md h-24 md:h-32"
            />
             <div className="h-1">
                {errors.content&&touched.content ?<div className="text-red-500 text-xs mt-1 ">{errors.content}</div>:null}
            </div>
          </div>



          
          <button
  type="submit"
  className="w-full  rounded-full bg-black text-white py-2 md:py-3 px-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_-8px_25px_rgba(255,255,255,0.6)]"
>
  Continue
</button>



        </Form>





      </div>
    </div>


    )}</Formik>













  </div>
</div>
    </>


  );
};

export default AddReview;