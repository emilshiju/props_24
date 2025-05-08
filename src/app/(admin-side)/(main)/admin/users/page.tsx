
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
import { blockUserApi, listAllUsersApi, unblockUserApi } from "@/src/lib/api_service_client/admin_service/listAllUsersHandler";
import { resListUsers, user_type } from "@/src/type/api_type/admin_type";



interface Order {
    id: number;
    user: {
      image: string;
      name: string;
      role: string;
    };
    projectName: string;
    team: {
      images: string[];
    };
    status: string;
    budget: string;
  }
  

// Define the table data using the interface
const tableData: Order[] = [
    {
      id: 1,
      user: {
        image: "/images/user/user-17.jpg",
        name: "Lindsey Curtis",
        role: "Web Designer",
      },
      projectName: "Agency Website",
      team: {
        images: ["emilshiu10@gmialcomsfs"]
      },
      budget: "3.9K",
      status: "Active",
    },
    {
      id: 2,
      user: {
        image: "/images/user/user-18.jpg",
        name: "Kaiya George",
        role: "Project Manager",
      },
      projectName: "Technology",
      team: {
        images:["emilshiu10@gmialcomsfs"],
      },
      budget: "24.9K",
      status: "Pending",
    },
    {
      id: 3,
      user: {
        image: "/images/user/user-17.jpg",
        name: "Zain Geidt",
        role: "Content Writing",
      },
      projectName: "Blog Writing",
      team: {
        images: ["emilshiu10@gmialcomsfs"],
      },
      budget: "12.7K",
      status: "Active",
    },
    {
      id: 4,
      user: {
        image: "/images/user/user-20.jpg",
        name: "Abram Schleifer",
        role: "Digital Marketer",
      },
      projectName: "Social Media",
      team: {
        images: ["emilshiu10@gmialcomsfs"],
      },
      budget: "2.8K",
      status: "Cancel",
    },
    {
      id: 5,
      user: {
        image: "/images/user/user-21.jpg",
        name: "Carla George",
        role: "Front-end Developer",
      },
      projectName: "Website",
      team: {
        images: ["emilshiu10@gmialcomsfs"],
      },
      budget: "4.5K",
      status: "Active",
    },
  ];



const ListUsers=()=>{

  const [allUsers,setAllUsers]=useState<user_type[]>([]);


  const fetchUsers = async (): Promise<void> => {
    try {
      const res_all_users:resListUsers = await listAllUsersApi();
      if(res_all_users.status){
      
      setAllUsers(res_all_users.data)

      }else{
        alert("occured error")
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

    const hey='Active'

    const handleViewProfileDetails=(userId:string)=>{

      router.push(`/admin/users/viewProfile/${userId}`);

    }

    const showNotVerified=()=>{
      alert("user not submited Profile")
    }


    const handleBlock=async(userId:string)=>{
   

     const blocked = await  blockUserApi(userId)
        if(blocked.status){
          
          fetchUsers()
        }
    }


    const handleUnBlock=async(userId:string)=>{
      

     const unBlocked=await unblockUserApi(userId)
     if(unBlocked.status){
    
      fetchUsers()
     }

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
                {allUsers&&allUsers.map((user,index) => (
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
                        {hey}
                      </Badge>
                    
                       
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
    )
}


export default ListUsers