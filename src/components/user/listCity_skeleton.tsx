


import React from "react";

const ListCitiesSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Header Skeleton */}
      <div className="mb-12 bg-gray-200 animate-pulse py-12 px-6 rounded-xl text-center">
        <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
      </div>

      {/* City Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-5">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mt-4"></div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section Skeleton */}
      <div className="mt-16 bg-gray-200 animate-pulse rounded-lg overflow-hidden">
        <div className="px-6 py-10 sm:px-10 sm:py-12 md:flex md:items-center md:justify-between">
          <div className="max-w-lg mx-auto md:mx-0 md:max-w-xl">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>
          <div className="h-12 bg-gray-300 rounded-md w-32 mt-8 md:mt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default ListCitiesSkeleton;