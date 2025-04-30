
"use client"

import { useEffect, useState } from "react"
  import { Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,} from "@/src/components/agent-agency/ui/table"
import { deletePropertyApi, listAllPropertyApi } from "@/src/lib/api_service_client/agent_agencies_service/property_handler"
import { PropertyResType } from "@/src/type/api_type/common_type"
import Image from "next/image"
import { useRouter } from 'next/navigation';


const PropertyList=()=>{


  const router = useRouter();

    const [allProperty,setAllProperty]=useState<PropertyResType[]>([])

    const fetchAllProperty=async()=>{

        const res=await listAllPropertyApi()

        if(res.status){
            setAllProperty(res.data)
        }

    }

    const editProperty=(id:string)=>{

      router.push(`/featured/edit/${id}`)

    }


    const deleteProperty=async(id:string)=>{

     const res =await  deletePropertyApi(id)

     if(res.status){
      alert("scuess")
     }else{
      alert("error")
     }
     
    }


    useEffect(()=>{
        
        fetchAllProperty()

    },[])

    return (
        <div className="overflow-hidden rounded-xl  border-gray-100 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto">
                  <div className="min-w-[1102px]">
                    <Table>
                    
                      <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>

                        <TableCell
                            isHeader
                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                          >
                            profile
                          </TableCell>
                          
                          <TableCell
                            isHeader
                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                          >
                            Name
                          </TableCell>
                          <TableCell
                            isHeader
                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                          >
                            Price
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
                        
                          {allProperty&&allProperty.map((data,index)=>(
                            <TableRow  key='iuhiuh'>

                      
<TableCell className="px-5 py-4 sm:px-6 text-start">
  <div className="flex items-center gap-3">
    <div className="w-26 h-26 rounded-full overflow-hidden">
      <Image
        width={64}
        height={64}
        className="object-cover w-full h-full rounded-full"
        src={data.imageUrl || 'https://www.inforwaves.com/media/2021/04/dummy-profile-pic-300x300-1.png'}
        alt={data.name}
      />
    </div>
  </div>
</TableCell>


                   

        
                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                               {data.name}
                            </TableCell>
                            {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                              <div className="flex -space-x-2">
                              
                               
                              </div>
                            </TableCell> */}
                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                             
                              {data.price}
                               
                            </TableCell>
                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                              
                              <button
          type="button"
        onClick={()=>editProperty(data.id)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Edit
        </button>
        <button
        onClick={()=>deleteProperty(data.id)}
          type="button"
          className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Delete
        </button>
        
                            </TableCell>
                          </TableRow>
                        ))} 
                    
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
    )
}

export default PropertyList