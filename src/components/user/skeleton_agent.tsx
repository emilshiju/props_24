


const SkeletonList = () => {
  return (
    <div className="flex gap-4  " >
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div 
        key={`skeleton-${index}`}
        className="w-[280px] sm:w-[300px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
      >
        <div className="flex justify-center pt-4">
          <div className="w-[255px] h-[235px] bg-gray-200 rounded-t-lg animate-pulse"></div>
        </div>
        
        <div className="flex items-center p-3 pl-6">
          <div className="flex">
            {[1, 2, 3].map((star) => (
              <div key={`star-${star}`} className="h-5 w-5 bg-gray-200 rounded-full mr-1 animate-pulse"></div>
            ))}
          </div>
          <span className="ml-2 h-4 w-20 bg-gray-200 rounded animate-pulse"></span>
        </div>
        
        <div className="text-start pl-6 pb-4">
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
        ))}
    </div>
  );
};

export default SkeletonList;