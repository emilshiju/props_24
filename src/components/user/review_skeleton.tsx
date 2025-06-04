




import React from 'react';

const ReviewFormSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6 sm:py-14 bg-white mx-auto px-4 animate-pulse">
      <div className="w-full max-w-6xl">
        {/* Heading Skeleton */}
        <div className="h-12 w-64 bg-gray-200 rounded mb-8 md:mb-12"></div>

        <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
          {/* Left side - Image and details Skeleton */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <div className="bg-white shadow border border-gray-300 rounded-md p-4 md:p-6 flex flex-col items-center w-full lg:w-66 h-auto lg:h-86">
              <div className="w-full h-48 md:h-64 bg-gray-200 mb-4"></div>
              <div className="w-full text-center lg:text-left">
                <div className="h-6 w-3/4 bg-gray-200 mb-2 mx-auto lg:mx-0"></div>
                <div className="h-4 w-1/2 bg-gray-200 mx-auto lg:mx-0"></div>
              </div>
            </div>
          </div>

          {/* Vertical line - hidden on mobile */}
          <div className="hidden lg:block w-px ml-0 lg:ml-12 min-h-[500px] bg-gray-400"></div>

          {/* Right side - Form Skeleton */}
          <div className="w-full lg:flex-grow">
            <div className="w-full p-4 md:p-6 bg-white rounded-lg">
              {/* Name Field Skeleton */}
              <div className="mb-4 md:mb-6">
                <div className="h-5 w-48 bg-gray-200 mb-3"></div>
                <div className="w-full h-10 bg-gray-200 rounded-md"></div>
              </div>

              {/* Rating Skeleton */}
              <div className="mb-4 md:mb-6">
                <div className="h-5 w-64 bg-gray-200 mb-3"></div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Review Textarea Skeleton */}
              <div className="mb-4 md:mb-6">
                <div className="h-5 w-48 bg-gray-200 mb-3"></div>
                <div className="w-full h-24 md:h-32 bg-gray-200 rounded-md"></div>
              </div>

              {/* Submit Button Skeleton */}
              <div className="w-full h-12 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewFormSkeleton;