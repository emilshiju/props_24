"use client"

import Image from "next/image"

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/src/components/admin/ui/table"
import { useEffect, useState } from "react"
import { listCityDetailsApi } from "@/src/lib/api_service_client/admin_service/city_handler"
import {  detailedCityResType } from "@/src/type/components_type/all_admin_type"
import { useRouter } from 'next/navigation';
import Loader from "@/src/components/loader"

const DetailedCityList=()=>{



  const [showLoader,setLoader]=useState(false)


  const [allData,setData]=useState<detailedCityResType []>([])

  const router = useRouter();


  console.log(" i got alll data")
  console.log(allData)

  const fetchAllDetailedCity=async()=>{
  
    const ress=await  listCityDetailsApi()
    if(ress.status){
      setData(ress.data)
    }

  }

  useEffect(()=>{
    fetchAllDetailedCity()
  },[])

  const editDetailsCity=(id:string)=>{
    router.push(`/admin/city/detailed/${id}`)
  }

  if(!allData.length){
    return <Loader />
  }


    return (


      <>
      {/* {showLoader&&<Loader  />} */}
      
     

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
                    Image
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    City
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
                
                  {allData&&allData.map((data,index)=>(
                    <TableRow   key={index}>

                     <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                     <Image
                                                    width={80}
                                                    height={60}
                                                    src={data.imageUrl||'https://www.inforwaves.com/media/2021/04/dummy-profile-pic-300x300-1.png'}
                                                    alt='iuhiuhui'
                                                  />
                    </TableCell> 
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <div className="flex -space-x-2">
                      ITALY
                       
                      </div>
                    </TableCell>
                   
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      
                      <button
  type="button"
onClick={()=>editDetailsCity(data.id)}
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  Edit
</button>
{/* <button
// onClick={()=>deleteCity(city.id)}
  type="button"
  className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  Delete
</button> */}

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

export default DetailedCityList