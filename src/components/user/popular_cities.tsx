"use client"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react";
import { MagnifyingGlassIcon, StarIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { listCityApi } from "@/src/lib/api_service_client/admin_service/city_handler";
import { cityAndDetaield, cityResType } from "@/src/type/components_type/all_admin_type";
import { useRouter } from 'next/navigation'


const Popular_Cities = () => {

  const [allData,setData]=useState<cityAndDetaield []>([])

  const router = useRouter()


  const fetchAllCity=async()=>{
  
    const response =await listCityApi()
    
        if(response.status){
            const filtered = response.data.filter((city:cityAndDetaield)=> city.details)
            setData(filtered)
          }
  }

  useEffect(()=>{
    fetchAllCity()
  },[])



  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState({
    left: false,
    right: true
  });

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowArrows({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth - 1
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };

  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    }
  };

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      scrollRight();
    } else if (touchStartX - touchEndX < -50) {
      scrollLeft();
    }
  };

  const navigateDetailedPage=(id:string)=>{
      router.push(`/area/${id}`)
    }

  return (
    <div className="relative p-5 max-w-7xl mx-auto">
      <h1 className='text-black text-2xl font-bold mb-6'>Popular Cities </h1>
      <div
        ref={scrollContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex flex-nowrap gap-4 overflow-x-auto p-3 w-full hide-scrollbar"
        style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
      >

        
        {allData.length === 0 && (
  <>
    {Array.from({ length: 3 }).map((_, index) => (
      <div 
        key={index} 
        className="flex flex-col items-center mb-6"
      >
        {/* Skeleton Card Container */}
        <div className="w-[280px] sm:w-[340px] h-[200px] flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden animate-pulse">
          {/* Skeleton Image */}
          <div className="w-full h-full bg-gray-300"></div>
        </div>
        
        {/* Skeleton City Name */}
        <div className="p-4 w-full">
          <div className="h-6 w-32 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>
      </div>
    ))}
  </>
)}


        
{allData.map((data, index) => (
  <div 
    key={index} 
    className="flex flex-col items-center mb-6 cursor-pointer"
    onClick={() => navigateDetailedPage(data.id)}
  >
    {/* Card Container */}
    
    <div className="w-[280px] sm:w-[340px] h-[200px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="w-full h-[200px] overflow-hidden">
        <Image
          src={data?.details?.imageUrl || 'https://w0.peakpx.com/wallpaper/773/949/HD-wallpaper-italy-village-town-boats-cute-houses-city.jpg'}
          alt={`${data.cityName} banner`}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      
     
    </div>
     {/* City Name */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 text-center">
          {data.cityName}
        </h3>
      </div>
  </div>
))}

      </div>

      {/* Left and Right Arrows */}
      {showArrows.left && (
        <button
          onClick={scrollLeft}
          className="hidden sm:flex absolute top-1/2 left-2 transform -translate-y-1/2 bg-white border border-black rounded-full w-10 h-10 items-center justify-center hover:bg-gray-100 transition z-10"
        >
          <ArrowLeftIcon className="h-6 w-6 text-black" />
        </button>
      )}

      {showArrows.right && (
        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border border-black rounded-full w-10 h-10 items-center justify-center hover:bg-gray-100 transition z-10"
        >
          <ArrowRightIcon className="h-6 w-6 text-black" />
        </button>
      )}

    
    </div>
  );
}

export default Popular_Cities