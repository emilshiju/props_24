
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


const AgenciesVerificationPage=()=>{


    const hey='Active'

    useEffect(()=>{

      get_AllPending_Verification_AgenciesApi()
      
    },[])


    

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
                
                  <TableRow >
                    <TableCell className="px-4 py-3 sm:px-6 text-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                          <Image
                            width={40}
                            height={40}
                            src='https://www.inforwaves.com/media/2021/04/dummy-profile-pic-300x300-1.png'
                            alt='yes'
                          />
                        </div>
                        account not verified
                        {/* <div>
                          <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        not accoutn verifited
                          </span>
                          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {user.role}
                          </span>
                        </div> */}
                      </div>
                    </TableCell>
                    {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      sdfsfsd
                    </TableCell> */}
                    {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <div className="flex -space-x-2">
                        emilshiju!gmail.com
                        
                      </div>
                    </TableCell> */}
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
                      {/* {order.budget} */}
                      <button
  type="button"
  
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  View
</button>
{/* <button
  type="button"
  className="text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  Block
</button> */}

                    </TableCell>
                  </TableRow>
        
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    )


}

export default AgenciesVerificationPage