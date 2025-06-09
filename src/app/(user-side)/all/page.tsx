"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  getAllAgentApi,
  getAllDataApi,
  getAllSearchedListApi,
} from "@/src/lib/api_service_client/user_service/filter_handler";
import Image from "next/image";
import { listAllCityApi } from "@/src/lib/api_service_client/user_service/area_handler";
import { cityAndDetaield } from "@/src/type/components_type/all_admin_type";
import SkeletonList from "@/src/components/user/skeleton_agent";
import ReviewStars from "@/src/components/user/reviewStars";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const router = useRouter();
  const [showLoader, setLoader] = useState(false);

  interface Results {
    agents: any[]; // Or a more specific type if you know the structure of agents
    agencies: any[]; // Same as above
    locations: any[]; // Same as above
  }

  const [activeTab, setActiveTab] = useState<string | number | null>(null); // Adjust based on your requirements
  const [results, setResults] = useState<Results>({
    agents: [],
    agencies: [],
    locations: [],
  });

  const fetchAllData = async () => {
    if (searchQuery) {
      setLoader(true);
      const ress = await getAllSearchedListApi(searchQuery);
      setLoader(false);
      if (ress.data) {
        setResults(() => ({
          agents: [...ress.data.allAgent],
          agencies: [...ress.data.allAgencies],
          locations: [...ress.data.allCity],
        }));
      }
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [searchQuery]);

  const navigateDetailedPage = (id: string) => {
    router.push(`/area/${id}`);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary">Search Results</h1>
          <p className="mt-2 text-lg text-gray-600">
            {`results for  ${searchParams}`}
          </p>

          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("agents")}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "agents"
                    ? "border-accent text-accent"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Agent
                {results.agents.length > 0 && (
                  <span className="ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    {results.agents.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("agencies")}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "agencies"
                    ? "border-accent text-accent"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Agencies
                {results.agencies.length > 0 && (
                  <span className="ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    {results.agencies.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("locations")}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "locations"
                    ? "border-accent text-accent"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Location
                {results.locations.length > 0 && (
                  <span className="ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    {results.locations.length}
                  </span>
                )}
              </button>
            </nav>
          </div>

          {showLoader && <SkeletonList />}

          {activeTab == "agents" && (
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              {/* <div className="flex justify-center" > */}
              {/* <div className="sm:grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-4"> */}
              {results.agents &&
                results.agents.map((data: any, index) => (
                  <div
                    key={index}
                    //  onClick={()=>navigateToDetailPage(data.id)}
                    className="w-[280px] sm:w-[300px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
                  >
                    <Link href="#">
                      <div className="flex justify-center pt-4">
                        <Image
                          className="rounded-t-lg"
                          src={data?.imageUrl}
                          alt="Technology acquisitions"
                          width={255}
                          height={235}
                        />
                      </div>
                    </Link>

                    {/* review section */}
                    <ReviewStars reviews={data.reviews || []} />

                    <div className="text-start pl-6">
                      {/* <div >
                                               <h5 className="text-lg font-medium text-gray-900">
                                                 {data?.businessName}
                                               </h5>
                                             </div>
                                             <p className="text-sm text-gray-500  mb-1">
                                               {data?.specialization.title}
                                             </p>
                                             <p className="text-sm text-gray-500  mb-1">
                                               {data?.city.cityName}
                                             </p> */}
                      <h3 className="font-semibold text-lg text-gray-800 group-hover:text-accent">
                        {data?.businessName}
                      </h3>
                      <p className="text-gray-600">
                        {data?.specialization.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-2 mb-2">
                        {data?.city.cityName},ITALY
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {activeTab == "agencies" && (
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              {/* <div className="flex justify-center" > */}
              {/* <div className="sm:grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-4"> */}
              {results.agencies &&
                results.agencies.map((data: any, index) => (
                  <div
                    // onClick={()=>navigateToDetailPage(data.id)}
                    key={index}
                    className="w-[280px] sm:w-[300px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
                  >
                    <Link href="#">
                      <div className="flex justify-center pt-4">
                        <Image
                          className="rounded-t-lg"
                          src={data?.imageUrl}
                          alt="Technology acquisitions"
                          width={255}
                          height={235}
                        />
                      </div>
                    </Link>

                    {/* review section */}
                    <ReviewStars reviews={data.reviews || []} />

                    <div className="text-start pl-6">
                      <h3 className="font-semibold text-lg text-gray-800 group-hover:text-accent">
                        {data?.businessName}
                      </h3>
                      <p className="text-gray-600">
                        {data?.specialization.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-2 mb-2">
                        {data?.city.cityName},ITALY
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {activeTab == "locations" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.locations.map((data, index) => (
                <div
                  key={index}
                  onClick={() => navigateDetailedPage(data.id)}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm "
                >
                  <Image
                    src={
                      data?.details?.imageUrl ||
                      "https://w0.peakpx.com/wallpaper/773/949/HD-wallpaper-italy-village-town-boats-cute-houses-city.jpg"
                    }
                    alt={`${data.cityName} banner`}
                    width={400}
                    height={200}
                  />

                  <div className="p-5">
                    {/* <a href="#"> */}
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      {data.cityName}
                    </h5>
                    {/* </a> */}
                    <p className="mb-3 font-normal text-gray-7 line-clamp-2">
                      {data?.details?.aboutContent}
                    </p>
                    <div className="text-accent group-hover:underline text-sm font-medium">
                      View details &rarr;
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
