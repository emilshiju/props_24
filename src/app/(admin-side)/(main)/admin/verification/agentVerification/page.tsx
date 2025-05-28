
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

    
import Image from "next/image"
import { get_AllPending_Verification_AgentApi } from "@/src/lib/api_service_client/admin_service/pendingdVerificationHandler";
import { user_type } from "@/src/type/components_type/verification_type";
import Loader from "@/src/components/loader";



const AgentVerificationPage=()=>{

  

    const [allAgent,setAllAgent]=useState<user_type[]>([])

    const [showLoader,setLoader]=useState(false)

    const fetchAllAgent=async()=>{
      setLoader(true)
      const resAllAgent =await get_AllPending_Verification_AgentApi()
      setLoader(false)

      if(resAllAgent.status){
        setAllAgent(resAllAgent.data)
      }
      
     }

   


    useEffect(()=>{
      fetchAllAgent()
    },[])

    const router = useRouter();



    const handleViewDetailed=(userId:string)=>{
      router.push(`/admin/verification/${userId}`)
    }

    

    return (
<>
{showLoader&&<Loader  />}

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
                    Agent
                  </TableCell>
                
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
                
                  {allAgent&&allAgent.map((agent,index)=>(

                  <TableRow key={index} >
                    <TableCell className="px-4 py-3 sm:px-6 text-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                        {agent?.profile?.imageUrl?<Image
                            width={40}
                            height={40}
                            src={agent.profile.imageUrl}
                            alt='yes'
                          />:
                          <Image
                            width={80}
                            height={80}
                            src='https://www.inforwaves.com/media/2021/04/dummy-profile-pic-300x300-1.png'
                            alt='yes'
                          />}
                        </div>
                        {agent.userName}
                        {/* account not verified */}
                       
                      </div>
                    </TableCell>
                    
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">

                      
                    {agent.profile.verified?<span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
      verified
    </span>: <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
      pending
    </span>}

                      {/* <Badge
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
                      </Badge> */}
                       
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {agent?.profile?
                      <button
  type="button"
  onClick={()=>handleViewDetailed(agent.id)}
  
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  View
</button>:<h1>Account not submited</h1>}


                    </TableCell>
                  </TableRow>))}
        
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      </>
    )
}

export default AgentVerificationPage