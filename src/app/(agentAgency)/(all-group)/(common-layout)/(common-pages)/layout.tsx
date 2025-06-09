"use client";
import React, { useEffect, useState } from "react";
import { Outfit } from "next/font/google";

import AppHeader from "@/src/components/agent-agency/AppHeader";
import AppSidebar from "@/src/components/agent-agency/AppSidebar";
import Backdrop from "@/src/components/agent-agency/Backdrop";
import { useSidebar } from "@/src/context/agentAgency/sidebar_context";
import { toast, Toaster } from "react-hot-toast";
import { profileExistsApi } from "@/src/lib/api_service_client/agent_agencies_service/protected_handler";
import { useRouter } from "next/navigation";
import Loader from "@/src/components/loader";

const CommonPageSideBar = ({ children }: { children: React.ReactNode }) => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const router = useRouter();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  //  const [loading, setLoading] = useState(false);

  // const checkProfileExists=async()=>{

  //   const ress=await profileExistsApi()

  //   setLoading(true)

  //    if(ress.status=='not_found'){

  //         router.push('/createProfile')

  //     }else if(ress.status=='not_verified'){

  //           router.push('/verification')

  //     }else if(ress.status=='error') {
  //                 toast.error(ress.data)
  //             }

  // }

  // useEffect(()=>{

  //   checkProfileExists()

  // },[])

  // if (!loading) {

  //   return <><Loader /></>;
  // }

  return (
    <>
      <div className="min-h-screen xl:flex">
        {/* Sidebar and Backdrop */}
        <AppSidebar />
        <Backdrop />
        {/* Main Content Area */}
        <div
          className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
        >
          {/* Header */}
          <AppHeader />

          {/* Page Content */}

          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                zIndex: 9999, // Ensuring the toast appears above everything
                padding: "12px 20px", // Add custom padding inside the toaster
                marginTop: "80px", // Adjust the margin-top if your header is fixed
              },
            }}
          />

          <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonPageSideBar;
