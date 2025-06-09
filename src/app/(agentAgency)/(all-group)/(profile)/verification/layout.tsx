import { checkProfileVerification } from "@/src/lib/api_service_server/user_service/area_handler";
import { redirect } from "next/navigation";

const Verification_side_layout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ress = await checkProfileVerification();

  if (ress.status == "not_found") {
    redirect("/createProfile");
  } else if (ress.status == "success") {
    redirect("/featured/add");
  }

  return <div>{children}</div>;
};

export default Verification_side_layout;
