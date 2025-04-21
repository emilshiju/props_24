'use client'
import { useState ,useRef,useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { ProfileData } from '@/src/type/validation_type/profilePage_type';
import profileSchema from '@/src/util/validation/profile_scehma';
import { createProfileApi } from '@/src/lib/api_service_client/user_service/profile_handler';
import { toast } from 'react-hot-toast';



const CreateProfile = ()=>{


    const initialValues:ProfileData = { businessName: '', phone: '',licenseNumber:'',bio:'',specialization:'' };

    const handleSubmit = async(values_data:ProfileData,formikHelpers: FormikHelpers<ProfileData>)=>{

              console.log("create profile submit")
              console.log(values_data)

              const ress = await createProfileApi(values_data)
              
              if(ress.status){
              
              }else{

                const errorMessage = ress.message || 'Failed to verify OTP';
                toast.error(errorMessage)
              }

              console.log("afterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
              console.log(ress)
    }

    
    

    return (
     
        <Formik 
        initialValues={initialValues}
        validationSchema={profileSchema}
        onSubmit={handleSubmit}
        >
            {({ values, handleChange, errors, touched }) => (
         
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
          
          <Form  className="space-y-6">
            <div>
              <label  className="block text-sm font-medium text-gray-700">
              Business Name
              </label>
              <Field
                type="text"
                id="businessName"
                name="businessName"
                value={values.businessName}
                onChange={handleChange}
                className="mt-1  block w-full text-black rounded-md focus:outline-none border-gray-300 shadow-sm  sm:text-sm h-8"
                
              />
               <div className="h-1">
                {errors.businessName&&touched.businessName ?<div className="text-red-500 text-xs mt-1 ">{errors.businessName}</div>:null}
            </div>
            </div>

            <div>
               
              <label  className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:outline-none h-8 sm:text-sm"
            
              />
              <div className="h-1">
                {errors.phone&&touched.phone ?<div className="text-red-500 text-xs mt-1 ">{errors.phone}</div>:null}
            </div>
            </div>

            <div>
              <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">
                License Number
              </label>
              <Field
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                value={values.licenseNumber}
                onChange={handleChange}
                className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:outline-none h-8  sm:text-sm"
                
              />
              <div className="h-1">
                {errors.licenseNumber&&touched.licenseNumber ?<div className="text-red-500 text-xs mt-1 ">{errors.licenseNumber}</div>:null}
            </div>
            </div>

            <div>
              <label  className="block text-sm font-medium text-gray-700">
                Specialization
              </label>
              <Field
                as="select"
                id="specialization"
                name="specialization"
                // value={values.specialization}
                onChange={handleChange}
                className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:outline-none h-8  sm:text-sm"
                >
            
              <option value="" disabled hidden></option>
               <option value="agent">I am an Agent</option>
               <option value="agencies">I represent an Agency</option>
               </Field>
              <div className="h-1">
                {errors.specialization&&touched.specialization ?<div className="text-red-500 text-xs mt-1 ">{errors.specialization}</div>:null}
            </div>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <Field
                id="bio"
                name="bio"
                rows={4}
                value={values.bio}
                onChange={handleChange}
                className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:outline-none h-8  sm:text-sm"
                
              />
              <div className="h-1">
                {errors.bio&&touched.bio ?<div className="text-red-500 text-xs mt-1 ">{errors.bio}</div>:null}
            </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save Profile
              </button>
            </div>
          </Form>


        </div>
      </div>
    </div>
    
      )}
    </Formik>
    )
    

}


export default CreateProfile















