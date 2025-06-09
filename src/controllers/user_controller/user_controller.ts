import { UserDetails } from "@/src/type/api_type/user_type";
import prisma from "../prisma_client";
import {
  LoginType,
  profileType,
  registeredUser,
  VerifyOTPResponse,
} from "@/src/type/controller_type/user_controller";
import { v4 as uuidv4 } from "uuid";

export async function registerUser(
  details: UserDetails
): Promise<{ status: boolean; user?: registeredUser }> {
  try {
    let user = await prisma.user.create({
      data: {
        userName: details.userName,
        email: details.email,
        password: details.password,
        role: details.role,
      },
    });
    console.log("User registered successfully:", user);

    return {
      status: true,
      user: {
        ...user,
        id: user.id.toString(),
      },
    };
  } catch (error) {
    console.error("Error registering user:", error);

    return { status: false };
  }
}

export async function otpRegister(
  email: string,
  otp: string
): Promise<boolean> {
  try {
    console.log("otp register");
    console.log(email, otp);

    const existingOtp = await prisma.otp.findFirst({
      where: { email: email },
    });

    if (existingOtp) {
      await prisma.otp.deleteMany({ where: { email: email } });
    }

    const register = await prisma.otp.create({
      data: { email: email, otp: otp },
    });

    return true;
  } catch (error) {
    console.error("Error in otp register:", error);

    return false;
  }
}

export async function verifyOTP(
  email: string,
  otp: string
): Promise<VerifyOTPResponse> {
  try {
    const otpRecord = await prisma.otp.findFirst({
      where: {
        email: email,
        otp: otp,
      },
    });

    if (otpRecord) {
      return { status: true, found: true };
    } else {
      return { status: true, found: false };
    }
  } catch (error) {
    console.error("Error in verify otp:", error);

    return { status: false };
  }
}

export async function createProfile(
  userId: string,
  profileDetails: profileType
) {
  try {
 

    const created = await prisma.profile.create({
      data: {
        userId: userId,
        businessName: profileDetails.businessName,
        phone: profileDetails.phone,
        licenseNumber: profileDetails.licenseNumber,
        bio: profileDetails.bio,
        specializationId: profileDetails.specialization,
        cityId: profileDetails.city,
        imageUrl: profileDetails.imageUrl,
      },
    });

    console.log("created");
    console.log(created);

    return true;
  } catch (error) {
    console.log("error occured increate profile ", error);

    return false;
  }
}

export async function uploadProfileImageUrl(userId: string, imageUrl: string) {
  try {
    const updatedProfile = await prisma.profile.update({
      where: { userId },
      data: { imageUrl },
    });

    console.log("Image URL updated:", updatedProfile);

    return true;
  } catch (error) {
    console.log("error occured in the uploadProfileImageUlrl", error);

    return false;
  }
}

export async function loginUser(loginDetails: LoginType) {
  try {
    console.log("loginuser", loginDetails);

    const user = await prisma.user.findFirst({
      where: {
        role: loginDetails.role,
        email: loginDetails.email,
        password: loginDetails.password,
      },
    });
    console.log("got ittt", user);

    if (!user) {
      return { status: false, message: "credentails not found" };
    }

    return {
      status: true,
      message: "Login successful",
      data: {
        ...user,
        id: user.id.toString(),
      },
    };
  } catch (error) {
    console.log("error occured in the loginUser", error);

    return { status: false, message: "internal server  error" };
  }
}

export async function detailedViewProfile(userId: string) {
  try {
    const findProfile = await prisma.profile.findFirst({
      where: {
        id: userId,
      },
      include: {
        user: true,
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
        _count: {
          select: {
            reviews: true,
          },
        },
      },
    });

    console.log("got profileeeee");
    console.log(findProfile);

    return findProfile;
  } catch (error) {
    console.log("error occured in detailedView", error);

    return false;
  }
}

export async function getPropertyUser(profileId: string) {
  try {
    const properties = await prisma.property.findMany({
      where: {
        profileId: profileId,
      },
      include: {
        city: {
          select: {
            cityName: true,
          },
        },
      },
    });

    return properties;
  } catch (error) {
    console.log("error occured in getpropertyUser");
    return false;
  }
}

export async function checkEmail(data: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: data },
    });

    if (user) {
      return { status: "exists" };
    }

    return { status: "not_exists" };
  } catch (error) {
    console.log("error occured in checkEmail");

    return { status: "error" };
  }
}

export const checkPorfileExists = async (id: string) => {
  try {
    const userWithProfile = await prisma.user.findUnique({
      where: { id },
      select: { profile: true },
    });

    if (!userWithProfile || !userWithProfile.profile) {
      return { status: "not_found", message: "User not found" };
    }

    if (!userWithProfile.profile.verified) {
      return { status: "not_verified", message: "user not verified" };
    }

    return { status: "success", message: "success" };
  } catch (error) {
    console.log("error occured in the  checkProfileExists", error);
    return { status: "error", message: "internal server error" };
  }
};
