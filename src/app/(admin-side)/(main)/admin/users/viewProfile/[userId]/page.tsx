"use client"

import { getSingleUserDetailsApi } from "@/src/lib/api_service_client/admin_service/listAllUsersHandler"
import { UserProfileType } from "@/src/type/components_type/listUsers"
import Image from "next/image"
import { useEffect, useId, useState } from "react"
import {use} from "react"
const ViewProfile=({params}:{ params: Promise<{ userId: string }> })=>{

  console.log("view profileeeeeeeeeeeeeeeeeeeeeeeeeee")
  const { userId } = use(params); 

   
  const [userDetails,setUserDetails]=useState<UserProfileType|null>(null)


  const fetchUserDetails=async()=>{

    const resUserDetails = await getSingleUserDetailsApi(userId)

    if(resUserDetails.status){
        setUserDetails(resUserDetails.data)
    }

  }
  

  useEffect(()=>{

    fetchUserDetails()

  },[])

    return (
        <div>

          <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              {userDetails?.imageUrl?<Image
                width={80}
                height={80}
                src={userDetails.imageUrl}
                alt="user"
              />:<Image
                  width={80}
                  height={80}
                  src='https://www.inforwaves.com/media/2021/04/dummy-profile-pic-300x300-1.png'
                  alt='dummy'
              />}
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                {userDetails?.user.userName}
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {userDetails?.user.email}
                </p>
                <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {userDetails?.phone}
                </p>
              </div>
            </div> 
            
            </div>
            </div>
            </div>


            <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h4>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              businessName  Name
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userDetails?.businessName}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Role
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userDetails?.user.role}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Email
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userDetails?.phone}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Phone
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              {userDetails?.phone}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Bio
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userDetails?.bio}
              </p>
            </div>


            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Bio
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userDetails?.specialization.title}
              </p>
            </div>

            
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                license - Number
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userDetails?.licenseNumber}
              </p>
            </div>



            
          </div>
        </div>

       
      </div>







    </div>
        </div>
    )
}

export default ViewProfile