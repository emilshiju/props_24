import prisma from "../prisma_client";

export async function checkIsVerified(id: string) {
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        userId: id,
      },
      select: {
        verified: true,
      },
    });

    console.log("i got profileeeee", profile);

    return profile;
  } catch (error) {
    console.log("error occured in the checkIsVerified", error);
  }
}
