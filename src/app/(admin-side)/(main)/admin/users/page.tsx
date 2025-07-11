
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

import Image from "next/image";
import { blockUserApi, listAllUsersApi, unblockUserApi } from "@/src/lib/api_service_client/admin_service/listAllUsersHandler";
import { resListUsers, user_type } from "@/src/type/api_type/admin_type";
import { toast } from 'react-hot-toast';
import Loader from "@/src/components/loader";





const ListUsers=()=>{

  const [allUsers,setAllUsers]=useState<user_type[]>([]);

  const [showLoader,setLoader]=useState(false)


  const fetchUsers = async (): Promise<void> => {
    
    try {

      setLoader(true)
      const res_all_users:resListUsers = await listAllUsersApi();
      setLoader(false)

      if(res_all_users.status){
      
      setAllUsers(res_all_users.data)

      }else{
        toast.error(res_all_users.data)
      }

    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };



  useEffect(() => {
    
  
    fetchUsers();
  }, []);



        console.log('got all usersssssssssss');
        console.log(allUsers);
  
 

        const router = useRouter();

    

    const handleViewProfileDetails=(userId:string)=>{

      router.push(`/admin/users/viewProfile/${userId}`);

    }

    const showNotVerified=()=>{
      toast.error("user not submited Profile")
    }


    const handleBlock=async(userId:string)=>{
   

     const blocked = await  blockUserApi(userId)
        if(blocked.status){
          
          fetchUsers()
        }else{
          toast.error(blocked.data)
        }
    }


    const handleUnBlock=async(userId:string)=>{
      

     const unBlocked=await unblockUserApi(userId)
     if(unBlocked.status){
    
      fetchUsers()
     }else{
      toast.error(unBlocked.data)
     }

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
                    User
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Role
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Email
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
                {allUsers&&allUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                          <Image
                            width={40}
                            height={40}
                            src={user.profile?.imageUrl||'https://www.inforwaves.com/media/2021/04/dummy-profile-pic-300x300-1.png'}
                            alt={user.createdAt}
                          />
                        </div>
                        {/* {user.profile?.userName||"account not verified"} */}
                        <div>
                          <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {user.userName||'not accoutn verifited'}
                          </span>
                          <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {/* {user.role} */}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {user.role}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <div className="flex -space-x-2">
                      {user.email}
                        
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    

                       {!user.status?<span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
      Active
    </span>: <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
      
      block
    </span>}

                    
                       
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      {/* {order.budget} */}
                      {user.profile?<button
  type="button"
  onClick={()=>handleViewProfileDetails(user.id)}
  className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800"
>
  View
</button>:<button
  type="button"
  onClick={showNotVerified}
  className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800"
>
  View
</button>}

{user.status?<button
  type="button"
  onClick={()=>handleUnBlock(user.id)}
  className="text-white bg-red-700 hover:bg-red-900 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  UnBlock
</button>:<button
  type="button"
  onClick={()=>handleBlock(user.id)}
  className="text-white bg-red-700 hover:bg-red-900 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  Block
</button>}


                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      </>
    )
}


export default ListUsers