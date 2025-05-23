"use client"
import Loader from '@/src/components/loader';
import { addCityApi } from '@/src/lib/api_service_client/admin_service/city_handler';
import { cityType } from '@/src/type/components_type/all_admin_type';
import citySchema from '@/src/util/validation/cities_scehma';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { useEffect,useState } from 'react';
// import 'react-hot-toast/style.css';
import {toast ,Toaster } from 'react-hot-toast';

const AddCitie=()=>{

  

 const [showLoader,setLoader]=useState(false)

    

    const initialValues={city:"",country:""}

    const handleSubmit=async(values_data:cityType,formikHelpers:FormikHelpers<cityType>)=>{

       setLoader(true)

       const response = await addCityApi(values_data)

       setLoader(false)

       
        formikHelpers.resetForm();
        

        if(response.status){
            toast.success(response.data)
        }else{
          
            toast.error(response.data)
        }
        
    }


    return (
      <>
       {showLoader&&<Loader />}
    
      
        <Formik 
      initialValues={initialValues}
      validationSchema={citySchema}
      onSubmit={handleSubmit}
      >
         {({ values, handleChange, errors, touched }) => (
        <Form>
          
        <div className="max-w-lg  mx-auto p-6 mt-5 bg-white rounded-2xl shadow-sm border border-gray-100">

      <h2 className="text-lg font-semibold text-gray-800 mb-6">Add City</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
        <Field
          type="text"
          name='city'
          value={values.city}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="h-1">
            {errors.city && touched.city ? <div className="text-red-500 text-xs mt-1 ">{errors.city}</div> : null}
            </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Add Country</label>
        <Field
          type="text"
          name='country'
          values={values.country}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="h-1">
            {errors.country && touched.country ? <div className="text-red-500 text-xs mt-1 ">{errors.country}</div> : null}
            </div>
      </div>
      <br/>
      <div>
      <button
    type="submit"
    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
  >
    Submit
  </button>
  </div>
    </div>
    </Form>)}
    </Formik>
    </>
    )
}

export default AddCitie