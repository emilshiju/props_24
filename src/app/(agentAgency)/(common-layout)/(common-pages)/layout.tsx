"use client";
import React from "react";
import { Outfit } from 'next/font/google';

import AppHeader from "@/src/components/agent-agency/AppHeader";
import AppSidebar from "@/src/components/agent-agency/AppSidebar";
import Backdrop from "@/src/components/agent-agency/Backdrop";
import { useSidebar } from "@/src/context/agentAgency/sidebar_context";



const CommonPageSideBar=({children}:{children:React.ReactNode})=>{

    const { isExpanded, isHovered, isMobileOpen } = useSidebar();
    
    
  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
  ? "ml-0"
  : isExpanded || isHovered
  ? "lg:ml-[290px]"
  : "lg:ml-[90px]";



    return (
 
        <>
        <div className="min-h-screen xl:flex" >
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
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  
    
        </>
        
        


    )
    
}

export default CommonPageSideBar