"use client";

import React from "react";
import { useSidebar } from "@/src/context/admin_context/sidebar_context";
import AppHeader from "@/src/components/admin/AppHeader";
import AppSidebar from "@/src/components/admin/AppSidebar";
import Backdrop from "@/src/components/admin/Backdrop";
import {Toaster } from 'react-hot-toast';

const AdminLayout=({ children }: { children: React.ReactNode })=>{

    const { isExpanded, isHovered, isMobileOpen } = useSidebar();
    
    
  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
  ? "ml-0"
  : isExpanded || isHovered
  ? "lg:ml-[290px]"
  : "lg:ml-[90px]";



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
                    padding: '12px 20px', // Add custom padding inside the toaster
                    marginTop: '80px', // Adjust the margin-top if your header is fixed
                  },
                }}
              />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>

        </>
    )
}


export default AdminLayout