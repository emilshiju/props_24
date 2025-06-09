import { Role } from "@/src/type/controller_type/user_controller";
import prisma from "../prisma_client";

export async function confirmEmail(email: string, role: Role) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        role: role,
      },
    });

    if (!user) {
      return { status: "not_exists" };
    }

    return { status: "sucess", data: user };
  } catch (error) {
    console.log("error occured in the confirmEmail", error);
    return { status: "error" };
  }
}

export async function resetPassword(email: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return false;
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { password: password },
    });
    return true;
  } catch (error) {
    console.log("error occured in the resetPassword controler", error);
    return false;
  }
}
