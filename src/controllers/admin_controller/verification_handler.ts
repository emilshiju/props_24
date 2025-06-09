import prisma from "../prisma_client";

export async function get_All_Pending_VerificationAgent() {
  try {
    const res_agent = await prisma.user.findMany({
      where: { role: "agent" },
      include: { profile: true },
    });

    return res_agent;
  } catch (error) {
    console.log("error occur in get_all_pending_verification_agent");

    return false;
  }
}

export async function get_All_Pending_VerificationAgencies() {
  try {
    const res_agencies = await prisma.user.findMany({
      where: { role: "agencies" },
      include: { profile: true },
    });

    return res_agencies;
  } catch (error) {
    console.log("error occur in get_all_pending_verification_agencies");

    return false;
  }
}

export async function getDetails(userId: string) {
  try {
    const res_Details = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        profile: {
          include: {
            city: {
              select: {
                cityName: true,
              },
            },
            specialization: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });

    return res_Details;
  } catch (error) {
    console.log("error occured in getDetails", error);

    return false;
  }
}

export async function verifyProfile(profileId: string) {
  try {
    const verifiedProfile = await prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        verified: true,
      },
    });

    return true;
  } catch (error) {
    console.log("error ocrred in verifyProfile", error);

    return false;
  }
}
