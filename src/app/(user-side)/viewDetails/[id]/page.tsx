"use client";
import {
  StarIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
  CheckBadgeIcon,
  ClockIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  HeartIcon,
  CalendarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, use, useState } from "react";
import { getProfileDetailsApi } from "@/src/lib/api_service_client/user_service/profile_handler";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import FeaturedProperties from "@/src/components/user/featured_properties";
import { UserProfileType } from "@/src/type/components_type/listUsers";
import { detailed_profile_type } from "@/src/type/components_type/common_type";
import ListReview from "@/src/components/user/review";
import { findAverageReviewApi } from "@/src/lib/api_service_client/user_service/review_handler";
import toast from "react-hot-toast";
import Loader from "@/src/components/loader";
import ProfileViewSkeleton from "@/src/components/user/viewProfile_skeleton";

const ViewDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const router = useRouter();

  const [allData, setAllData] = useState<detailed_profile_type | null>();

  const [averageValue, setAverageValue] = useState(Number || 0);

  const [showLoader, setLoader] = useState(false);

  const fetchProfileData = async (id: string) => {
    const response = await getProfileDetailsApi(id);

    if (response.status) {
      setAllData(response.data);
    } else {
      toast.error(response.data);
    }
  };

  const fetchReviewAverage = async (id: string) => {
    const ress = await findAverageReviewApi(id);

    if (ress.status) {
      setAverageValue(ress.data);
    }
  };

  useEffect(() => {
    fetchProfileData(id);
    fetchReviewAverage(id);
  }, []);

  if (!allData) {
    return (
      <div>
        <ProfileViewSkeleton />
      </div>
    );
  }

  const navigateToWriteReview = (profileId: string) => {
    router.push(`/review/add/${profileId}`);
  };

  const formatDateToMonthYear = (createdAt: Date) => {
    const date = new Date(createdAt);

    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = monthNames[monthIndex];

    return `${monthName} ${year}`;
  };

  return (
    <>
      {/* {showLoader&&<Loader  />} */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Agent Header */}
        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
          <div className="bg-gradient-to-br from-primary to-primary-light px-4 py-16 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="h-42 w-42 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold">
                <Image
                  src={allData?.imageUrl}
                  alt="Profile"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <div className="flex items-center space-x-2">
                  <h1 className="text-3xl font-bold text-white">
                    {allData.businessName}
                  </h1>

                  <CheckBadgeIcon
                    className="h-6 w-6 text-accent"
                    title="Agente verificato"
                  />
                </div>
                <div className="flex items-center justify-center md:justify-start mt-1 text-white/80">
                  <MapPinIcon className="h-5 w-5 mr-1" />
                  <span>{allData.city.cityName}</span>
                  <span className="mx-2">•</span>
                  <BuildingOfficeIcon className="h-5 w-5 mr-1" />
                  <span>{allData.user.role}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.round(averageValue) ? "" : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-white">
                    {" "}
                    {averageValue} ( {allData._count.reviews} reviews)
                  </p>
                </div>
              </div>
              <div className="md:ml-auto mt-6 md:mt-0 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                <a
                  href={`mailto:emilshiju10@gmail.com`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent/90"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Send Email
                </a>
                <div
                  onClick={() => navigateToWriteReview(allData.id)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary/90"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  write review
                </div>
              </div>
            </div>
          </div>

          {/* Agent Stats */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3">
                <div className="text-2xl font-bold text-primary">
                  {allData._count.reviews}
                </div>
                <div className="text-sm text-gray-500">Reviews</div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-gray-500">Properties Sold</div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-gray-500">Years of Experience</div>
              </div>
              <div className="p-3">
                <div className="text-2xl font-bold text-primary">0%</div>
                <div className="text-sm text-gray-500">sucess rate</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 flex items-center">
                  <EnvelopeIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <a
                    href={`mailto:emilshiju10@gmail.com`}
                    className="hover:text-accent"
                  >
                    {allData.user.email}
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Telefono</dt>
                <dd className="mt-1 text-sm text-gray-900 flex items-center">
                  <PhoneIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <a href={`tel:8086780430`} className="hover:text-accent">
                    {allData.phone}
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  {allData.user.role}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 flex items-center">
                  <BuildingOfficeIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <Link href={`/agencies`} className="hover:text-accent">
                    {allData.businessName}
                  </Link>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Active Since
                </dt>
                <dd className="mt-1 text-sm text-gray-900 flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
                  {formatDateToMonthYear(allData.createdAt)}
                </dd>
              </div>
            </dl>
          </div>

          {/* Specialties */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-medium text-gray-900">
                Specializations
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {/* {specialties.map((specialty: string) => ( */}
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {allData.specialization.title}
              </span>
              {/* ))} */}
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex items-center">
            <DocumentTextIcon className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">
              {" "}
              About {allData.businessName}
            </h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p className="text-gray-700 whitespace-pre-line">
              With over of years of experience in the{" "}
              {allData.specialization.title} real estate sector,{" "}
              {allData.businessName} in prestigious properties in the main
              Italian cities
            </p>
          </div>
        </div>

        {/* featured properties */}

        <FeaturedProperties profileId={id} />

        <ListReview profileId={id} />

        {/* CTA Section */}
        <div className="mt-8 bg-primary rounded-lg shadow-lg overflow-hidden">
          <div className="px-4 py-8 sm:px-6 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Are you looking for a house in Milan ?
            </h2>
            <p className="text-primary-light mb-6 max-w-3xl mx-auto">
              {allData.businessName} is here to help you find the perfect
              property.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                  Contact {allData.businessName}
                </button>
              </Link>
              <Link href="/">
                <button className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                  Search Property
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
