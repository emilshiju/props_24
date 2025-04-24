
"use client"
import React, { useEffect, useState }  from "react";
import { useRouter } from 'next/navigation';

import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
  } from "@/src/components/admin/ui/table"

import Badge from "@/src/components/admin/ui/badge/badge"
import Image from "next/image";
import { get_AllPending_Verification_AgenciesApi } from "@/src/lib/api_service_client/admin_service/pendingdVerificationHandler";
import { user_type } from "@/src/type/components_type/verification_type";


const AgenciesVerificationPage=()=>{


    const hey='Active'

    const [allAgencies,setAllAgencies]=useState<user_type[]>([])

    const fetchAllAgencies=async()=>{
      const allAgencies = await  get_AllPending_Verification_AgenciesApi()
      if(allAgencies.status){
        setAllAgencies(allAgencies.data)
      }else{
        alert("ereror")
      }
    }

    useEffect(()=>{
      fetchAllAgencies()
      
      
    },[])



    const router = useRouter();
    

    const handleViewDetailed=(userId:string)=>{
      router.push(`/admin/verification/${userId}`)
    }



    

    return (

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1102px]">
            <Table>
              {/* Table Header */}
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Agencies
                  </TableCell>
                  {/* <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Role
                  </TableCell> */}
                  {/* <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Email
                  </TableCell> */}
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Status
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHeader>
  
              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                
                  {allAgencies&&allAgencies.map((agencies,index)=>( 
                    <TableRow key={index} >
                    <TableCell className="px-4 py-3 sm:px-6 text-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                          {agencies.profile.imageUrl?<Image
                            width={40}
                            height={40}
                            src={agencies.profile.imageUrl}
                            alt='yes'
                            />:<Image
                            width={40}
                            height={40}
                            src='https://www.inforwaves.com/media/2021/04/dummy-profile-pic-300x300-1.png'
                            alt='yes'
                          />}
                        </div>
                        
                        {agencies.userName}
                        
                      </div>
                    </TableCell>
                   
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <Badge
                        size="sm"
                        color={
                          hey === "Active"
                            ? "success"
                            : hey === "Pending"
                            ? "warning"
                            : "error"
                        }
                      >
                         Pending
                      </Badge>
                       
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      {agencies.profile?
                      <button
                        type="button" 
                        onClick={()=>handleViewDetailed(agencies.id)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        View
                      </button>:<h1>Account not submited</h1>
                      }


                    </TableCell>
                  </TableRow>))}
        
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    )


}

export default AgenciesVerificationPage