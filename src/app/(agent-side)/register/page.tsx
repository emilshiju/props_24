


'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { FormValues } from '@/src/type/validation_type/formTypes';
import registerSchema from '@/src/util/validation/register_schema';



const Register = ()=>{



      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [conformPassword,setConformPassword]=useState('')

      const initialValues: FormValues = { email: '', password: '',confirmPassword:'' };


      const handleSubmit = () =>{

        alert("submit")


      }
    


    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gray-50">
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
        <select
          id="role"
          name="role"
          className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-700 bg-white appearance-none"
        >
          <option value="agent">I am an Agent</option>
          <option value="agency">I represent an Agency</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
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
            <input
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

            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
  </div>

    )
}


export default Register