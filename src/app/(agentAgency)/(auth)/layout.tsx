"use client";
import { profileExistsApi } from "@/src/lib/api_service_client/agent_agencies_service/protected_handler";
import "../../globals.css";

import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/src/components/loader";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const Agent_side_layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={inter.className}>
      <div>
        <Toaster />
      </div>

      {children}
    </div>
  );
};

export default Agent_side_layout;
