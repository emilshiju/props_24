



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
import { deleteCityApi,  listCityApi } from "@/src/lib/api_service_client/admin_service/city_handler";
import { cityResType } from "@/src/type/components_type/all_admin_type";
import { toast } from 'react-hot-toast';


const ListCitie=()=>{

    const [allCitie,setCitie]=useState<cityResType []>([])


    const router = useRouter();

    const fetchCities=async()=>{

        const response =await listCityApi()

        if(response.status){
            setCitie(response.data)
        }else{
          toast.error(response.data)
        }

    
    }




    useEffect(()=>{

        fetchCities()


    },[])



    const editCity=(id:string)=>{
        

      router.push(`/admin/city/${id}`)

    }


    const deleteCity=async(id:string)=>{

     

        const deleted = await deleteCityApi(id)

        if(deleted.status){
          
          fetchCities()

          toast.success("sucessfuly deleted")
        }else{
          
          toast.error(deleted.data)
        }


    }



       const hey='Active'

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
                    City
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Country
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
                
                  {allCitie&&allCitie.map((city,index)=>(
                    <TableRow  key={city.id}>

                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {city.cityName}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <div className="flex -space-x-2">
                      {city.country}
                       
                      </div>
                    </TableCell>
                    {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                     
                      {city.cityName}
                       
                    </TableCell> */}
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      
                      <button
  type="button"
onClick={()=>editCity(city.id)}
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  Edit
</button>
<button
onClick={()=>deleteCity(city.id)}
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

export default ListCitie