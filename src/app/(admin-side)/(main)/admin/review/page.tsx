





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

import { toast } from 'react-hot-toast';

import { specialisation_Res_Type } from "@/src/type/components_type/all_admin_type";
import { deleteSpecializationApi ,listSpecializationApi} from "@/src/lib/api_service_client/admin_service/specialization_handler";
import { deleteReviewApi, listAllReviewApi } from "@/src/lib/api_service_client/admin_service/review_handler";
import { reviewResType } from "@/src/type/components_type/all_users_type";
import Loader from "@/src/components/loader";





const ListReview=()=>{


 
    const [allData,setData]=useState<reviewResType []>([])
    const [showLoader,setLoader]=useState(false)


    const fetchAllReview=async()=>{
      setLoader(true)
      const ress=await  listAllReviewApi()
      setLoader(false)

      if(ress.status){
        setData(ress.data)
      }else{
        toast.error(ress.data)
       }
    }


    useEffect(()=>{

         fetchAllReview()

    },[])



    const handleDelete=async(id:string)=>{
        setLoader(true)
        const deleted =await deleteReviewApi(id)
        setLoader(false)

        if(deleted.status){
            toast.success(deleted.data)
            fetchAllReview()

        }else{
            toast.error(deleted.data)
        }

    }


    return (

      <>
      {showLoader&&<Loader/>}
      
     

        <div className="overflow-hidden rounded-xl  border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1102px]">
            <Table>
            
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Specilization
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Description
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
                
                  {allData&&allData.map((list,index)=>(
                    <TableRow  key={index}>

                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {list.content}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <div className="flex -space-x-2">
                      {list.name}
                       
                      </div>
                    </TableCell>
                    
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                     
<button
onClick={()=>handleDelete(list.id)}
  type="button"
  className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  Delete
</button>

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

export default ListReview