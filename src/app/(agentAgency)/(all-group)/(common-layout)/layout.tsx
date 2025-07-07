import "../../../globals.css";
import { Outfit } from "next/font/google";
import { SidebarProvider } from "@/src/context/agentAgency/sidebar_context";
import "@/src/style/agentAgency/agentAgency.css";
import { checkProfileVerification } from "@/src/lib/api_service_server/user_service/area_handler";
import { redirect } from "next/navigation";

const outfit = Outfit({
  subsets: ["latin"],
});

const AgentAndAgency = async ({ children }: { children: React.ReactNode }) => {
  const ress = await checkProfileVerification();

  if (ress.status == "not_found") {
    redirect("/createProfile");
  } else if (ress.status == "not_verified") {
    redirect("/verification");
  }

  return (
    <div className={`${outfit.className} `}>
      {/* <ThemeProvider> */}
      <SidebarProvider>{children}</SidebarProvider>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default AgentAndAgency;
