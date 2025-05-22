'use client'

import { adminLoginApi } from '@/src/lib/api_service_client/admin_service/admin_login_handler';
import { AdminLoginValues } from '@/src/type/validation_type/formTypes';
import adminLoginSchema from '@/src/util/validation/adminLogin';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';


const AdminLogin=()=>{


    const initialValues = {role:'admin', email:'',password:'' };


    const handleSubmit=async(values_data:AdminLoginValues,formikHelpers:FormikHelpers<AdminLoginValues>)=>{
      console.log("admin loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
      console.log(values_data)
      formikHelpers.resetForm()
      const ress=await adminLoginApi(values_data)

      if(ress.status){
        alert(ress.data)
      }else{
        alert(ress.data)
      }


    }



    return (

        <div className="min-h-[80vh] flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8"> 
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
    Admin Login
    </h2>
    
  </div>



 <Formik 
       initialValues={initialValues}
       validationSchema={adminLoginSchema}
       onSubmit={handleSubmit}
       >
           {({ values, handleChange, errors, touched }) => (

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    
      

      <Form className="space-y-6" >



        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-mail address
          </label>
          <div className="mt-1">
            <Field
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="block w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
             <div className="h-1">
            {errors.email&&touched.email?<div className="text-red-500 text-xs mt-1 ">{errors.email}</div>:null}
        </div>

          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
          </label>
          <div className="mt-1">
            <Field
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              className="block w-full text-black  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
             <div className="h-1">
            {errors.password&&touched.password ?<div className="text-red-500 text-xs mt-1 ">{errors.password}</div>:null}
        </div>
          </div>
        </div>

        <div className="flex justify-end">
         

         
        </div>

        <div>
          <button
            type="submit"

            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            sign In
          </button>
        </div>
      </Form>

   


    </div>
  )}
</Formik>





    </div>
  </div>

    )

}

export default AdminLogin