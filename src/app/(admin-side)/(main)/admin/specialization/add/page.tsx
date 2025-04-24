


"use client"
import { addCityApi } from '@/src/lib/api_service_client/admin_service/city_handler';
import { addSpecializationApi } from '@/src/lib/api_service_client/admin_service/specialization_handler';
import { specialisation_Type } from '@/src/type/api_type/admin_type';
import { cityType } from '@/src/type/components_type/all_admin_type';
import specializationSchema from '@/src/util/validation/specialization_scehma';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import {toast} from 'react-hot-toast';


const AddSpecialization=()=>{

    const initialValues={title:"",description:""}


    const handleSubmit=async(values_data:specialisation_Type,formikHelpers:FormikHelpers<specialisation_Type>)=>{

       const added = await  addSpecializationApi(values_data)
       
       formikHelpers.resetForm()

       if(added.status){
        alert("added")
       }else{
        alert("not added")
       }

    }



    return (

 <>
      
        <Formik 
      initialValues={initialValues}
      validationSchema={specializationSchema}
      onSubmit={handleSubmit}
      >
         {({ values, handleChange, errors, touched }) => (
        <Form>
          
        <div className="max-w-lg  mx-auto p-6 mt-5 bg-white rounded-2xl shadow-sm border border-gray-100">

      <h2 className="text-lg font-semibold text-gray-800 mb-6">Add Specialization</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <Field
          type="text"
          name='title'
          value={values.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="h-1">
            {errors.title && touched.title ? <div className="text-red-500 text-xs mt-1 ">{errors.title}</div> : null}
            </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <Field
          type="text"
          name='description'
          values={values.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="h-1">
            {errors.description && touched.description? <div className="text-red-500 text-xs mt-1 ">{errors.description}</div> : null}
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

export default AddSpecialization