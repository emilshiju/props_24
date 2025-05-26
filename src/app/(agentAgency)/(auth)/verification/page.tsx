"use client"
import { checkEntityVerified } from "@/src/lib/api_service_client/agent_agencies_service/common_handler";
import React, { useEffect, useState } from "react";


const VerificationStatusPage = () => {

  const [allData,setData]=useState(false)

  const fetchVerifiedOrNot=async()=>{

     const ress=await checkEntityVerified()

     if(ress.status){
      setData(ress.data.verified)
     }else{
      alert(ress.data)
     }

  }


  useEffect(()=>{

    fetchVerifiedOrNot()

   

  },[])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        {!allData?<h2 className="text-2xl font-bold text-yellow-600 mb-4">
          Account Verification Pending
        </h2>:
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Account Approved
        </h2>}
        {!allData&&<p className="text-gray-600 mb-6">
          Your account is currently under verification. Please wait for admin approval.
        </p>}
        {!allData&&<p className="text-gray-500 mb-4">
          Once verified, you will be notified via email and can proceed to use all features of the platform.
        </p>}
        {!allData?<div
          
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          waiting
        </div>:
        <div
          
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          click here
        </div>}
      </div>
    </div>
  );
};

export default VerificationStatusPage;
