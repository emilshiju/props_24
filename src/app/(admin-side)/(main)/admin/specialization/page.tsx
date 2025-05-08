





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





const Specialization=()=>{


    const [allSpecialization,setSpecialization]=useState<specialisation_Res_Type[]>([]);


    const fetchAllSpecialization=async()=>{

        const ress =await listSpecializationApi()

        if(ress.status){
            console.log("got all data",ress.data)
            setSpecialization(ress.data)
        }

    }


    useEffect(()=>{

        fetchAllSpecialization()

    },[])



    const handleDelete=async(id:string)=>{

        const deleted =await deleteSpecializationApi(id)

        if(deleted.status){
            toast.success('sucessfully deleted')
            fetchAllSpecialization()

        }else{
            toast.error(deleted.data)
        }

    }


    return (

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
                  {/* <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Status
                  </TableCell> */}
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
                
                  {allSpecialization&&allSpecialization.map((list,index)=>(
                    <TableRow  key={index}>

                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {list.title}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <div className="flex -space-x-2">
                      {list.description}
                       
                      </div>
                    </TableCell>
                    {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                     
                      {city.cityName}
                       
                    </TableCell> */}
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      
                      {/* <button
  type="button"
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  Edit
</button> */}
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
    )
}

export default Specialization