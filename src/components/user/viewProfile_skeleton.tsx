




const ProfileViewSkeleton=()=>{

    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  {/* Agent Header Skeleton */}
  <div className="bg-white overflow-hidden shadow-lg rounded-lg">
    <div className='bg-gray-200 px-4 py-16 sm:px-6 lg:px-8 relative'>
      <div className="relative flex flex-col md:flex-row items-center">
        <div className="h-42 w-42 rounded-full bg-gray-300 animate-pulse"></div>
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left w-full md:w-auto">
          <div className="h-8 w-64 bg-gray-300 rounded animate-pulse mb-2"></div>
          <div className="flex items-center justify-center md:justify-start mt-1">
            <div className="h-4 w-48 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center justify-center md:justify-start mt-2">
            <div className="h-5 w-24 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="md:ml-auto mt-6 md:mt-0 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="h-10 w-32 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>

    {/* Agent Stats Skeleton */}
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-3">
            <div className="h-8 w-full bg-gray-300 rounded animate-pulse mb-1"></div>
            <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>

    {/* Contact Info Skeleton */}
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="sm:col-span-1">
            <div className="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1"></div>
            <div className="h-4 w-48 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>

    {/* Specialties Skeleton */}
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <div className="h-6 w-32 bg-gray-300 rounded animate-pulse mb-3"></div>
      <div className="flex flex-wrap gap-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-6 w-20 bg-gray-300 rounded-full animate-pulse"></div>
        ))}
      </div>
    </div>
  </div>

  {/* Bio Section Skeleton */}
  <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <div className="h-6 w-48 bg-gray-300 rounded animate-pulse"></div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-4/5 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  </div>

  {/* Featured Properties Skeleton */}
  <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <div className="h-6 w-48 bg-gray-300 rounded animate-pulse"></div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-4 space-y-2">
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Reviews Skeleton */}
  <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <div className="h-6 w-48 bg-gray-300 rounded animate-pulse"></div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
            <div className="space-y-1">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="h-3 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* CTA Section Skeleton */}
  <div className="mt-8 bg-gray-200 rounded-lg shadow-lg overflow-hidden animate-pulse">
    <div className="px-4 py-8 sm:px-6 text-center">
      <div className="h-8 w-3/4 mx-auto bg-gray-300 rounded mb-4"></div>
      <div className="h-4 w-2/3 mx-auto bg-gray-300 rounded mb-6"></div>
      <div className="flex justify-center space-x-4">
        <div className="h-12 w-40 bg-gray-300 rounded-md"></div>
        <div className="h-12 w-40 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  </div>
</div>

    )
}

export default ProfileViewSkeleton