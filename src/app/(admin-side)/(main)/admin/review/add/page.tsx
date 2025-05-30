"use client"

import { getAllAgenciesApi, getAllAgentApi } from '@/src/lib/api_service_client/user_service/filter_handler';
import { agent_agencies } from '@/src/type/components_type/common_type';
import { adminUserReviewSchema, userReviewSchema } from '@/src/util/validation/review_scehma';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { reviewType } from '@/src/type/components_type/all_admin_type';
import { addReviewDetailsApi } from '@/src/lib/api_service_client/user_service/review_handler';
import { addReviewAdminApi } from '@/src/lib/api_service_client/admin_service/review_handler';
import Loader from '@/src/components/loader';
import toast from 'react-hot-toast';




const ReviewManagement = () => {

    const [allAgent,setAgent]=useState<agent_agencies []>([])
    const [allAgency,setAgency]=useState<agent_agencies []>([])
    const [showLoader,setLoader]=useState(false)



    const fetchAllAgent=async()=>{

       const ress=await  getAllAgentApi()

       if(ress.status){
        setAgent(ress.data)
       }

    }

    const fetchAllAgencies=async()=>{

       const ress=await getAllAgenciesApi()

       if(ress.status){
        setAgency(ress.data)
       }

    }


    useEffect(()=>{
        fetchAllAgent()
        fetchAllAgencies()

    },[])



  

  const [entityType, setEntityType] = useState<'agent' | 'agency'>('agent');
  
 
 

  

   const initialValues={name:"",content:"",profileId:"",rating:5}


  const handleSubmit=async(values_data:reviewType,formikHelpers: FormikHelpers<reviewType>)=>{


  const payload = {
    ...values_data,
    rating: Number(values_data.rating),
  };

  
    setLoader(true)
    const ress=await addReviewAdminApi(payload)
    setLoader(false)


    if(ress.status){

      formikHelpers.resetForm()
        
      toast.success(ress.data)
        
    }else{
       
        toast.success(ress.data)
    }


  }


  return (

    
    <>
     {showLoader&&<Loader />}
   
   
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Review Management</h1>
      
      
        <Formik 
                initialValues={initialValues}
                validationSchema={adminUserReviewSchema}
                onSubmit={handleSubmit}
    
          >{({ values, handleChange, errors, touched }) => (
         
    
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Review</h2>
        
        <Form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Review For
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="entityType"
                  checked={entityType === 'agent'}
                  onChange={() => setEntityType('agent')}
                />
                <span className="ml-2">Agent</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="entityType"
                  checked={entityType === 'agency'}
                  onChange={() => setEntityType('agency')}
                />
                <span className="ml-2">Agency</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select {entityType === 'agent' ? 'Agent' : 'Agency'}
            </label>
            <Field
            as="select"
            name="profileId"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            //   value={selectedEntity}
              onChange={handleChange}
              
            >
              <option value=""disabled hidden>Select {entityType === 'agent' ? 'an agent' : 'an agency'}</option>
              {entityType === 'agent'
                ? allAgent.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {agent.businessName}
                    </option>
                  ))
                : allAgency.map((agency) => (
                    <option key={agency.id} value={agency.id}>
                      {agency.businessName}
                    </option>
                  ))}
            </Field>
             <div className="h-1">
                {errors.profileId&&touched.profileId ?<div className="text-red-500 text-xs mt-1 ">{errors.profileId}</div>:null}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Reviewer Name
            </label>
            <Field
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            //   value={reviewerName}
              name='name'
              id='name'
            />
             <div className="h-1">
                {errors.name&&touched.name ?<div className="text-red-500 text-xs mt-1 ">{errors.name}</div>:null}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rating
            </label>
            <Field
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
         
            as="select"
            name='rating'
            onChange={handleChange}
              
            >
              {[5, 4, 3, 2, 1].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'star' : 'stars'}
                </option>
              ))}

            </Field>
           
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Review Content
            </label>
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

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            
            >
               Add Review
            </button>
          </div>
        </Form>

        
      </div>
)}</Formik>

    </div>
     </>
     
  );
};

export default ReviewManagement;