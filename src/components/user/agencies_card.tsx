"use client"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react";
import {  ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { agent_agencies } from "@/src/type/components_type/common_type";
import { getAllAgenciesApi } from "@/src/lib/api_service_client/user_service/filter_handler";
import { useRouter } from "next/navigation";
import ReviewStars from "./reviewStars";
import SkeletonList from "./skeleton_agent";


const AgenciesCard = () => {

  const router = useRouter()
    

  const [allData,setData]=useState<agent_agencies []>([])

  const fetchAllAgency=async()=>{
      const ress=await getAllAgenciesApi()
      if(ress.status){
        setData(ress.data)
      }
    }
    
    useEffect(()=>{
      fetchAllAgency()
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


  const navigateToDetailPage=(id:string)=>{
    router.push(`/viewDetails/${id}`) 
  }


  return (
    <div className="relative p-5 max-w-7xl mx-auto">
         <h1 className='text-black text-2xl font-bold mb-6'>Top Rated Real Estate Agencies in Italy</h1>
      <div
        ref={scrollContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex flex-nowrap gap-4 overflow-x-auto p-3 w-full hide-scrollbar"
        style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
      >

          {/* Show skeleton loaders when data is loading */}
            {allData.length==0 && <SkeletonList />}
          

        {allData.map((data,index) => (
          <div
            onClick={()=>navigateToDetailPage(data.id)}
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
                              {/* <div >
                                <h5 className="text-lg font-medium text-gray-900">
                                  {data?.businessName}
                                </h5>
                              </div>
                              <p className="text-sm text-gray-500  mb-3">
                                {data?.city.cityName},ITALY
                              </p> */}
                                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-accent">{data?.businessName}</h3>
                    <p className="text-gray-600">{data?.specialization.title}</p>
                    <p className="text-sm text-gray-500 mt-2 mb-2">{data?.city.cityName},ITALY</p>
                           
                            

                            </div>
                            
          </div>



          // <div
          //                 onClick={()=>navigateToDetailPage(data.id)}
          //                 key={index}
          //                 className="w-[280px] sm:w-[400px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
          //               >
                          
          //                   <div className="flex items-center p-3 pl-6">
          //                     <Image
          //                       className="rounded-t-lg"
          //                       src={data?.imageUrl}
          //                       alt="Technology acquisitions"
          //                       width={160}
          //                       height={110}
          //                     />
          //                     <div className="pl-4 flex flex-col">
          //                       <h1 className="text-lg font-medium text-gray-900">{data.businessName}</h1>
          //                       <h1 className="text-sm text-gray-500 pt-1">{data?.city?.cityName},Italy</h1>
          //                     </div>
          //                   </div>
                        
                        
          //                 <div className="flex items-center p-3 pl-6">
          //                   <div className="flex text-yellow-400">
          //                     <StarIcon key={1} className="h-5 w-5" />
          //                     <StarIcon key={2} className="h-5 w-5" />
          //                     <StarIcon key={3} className="h-5 w-5" />
          //                   </div>
          //                   <span className="text-black text-sm sm:text-base">(20 reviews)</span>
          //                 </div>
                        
          //                 <div className="flex justify-start text-start  px-6">
                           
                          
          //                 </div>
                        
          //                 <div className="flex items-center mt-4 mb-4 px-6">
          //                   <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          //                     View Agency
          //                   </button>
          //                 </div>
          //               </div>

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

export default AgenciesCard