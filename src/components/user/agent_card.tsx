"use client"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react";
import { MagnifyingGlassIcon, StarIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { getAllAgentApi } from "@/src/lib/api_service_client/user_service/filter_handler";
import { agent_agencies } from "@/src/type/components_type/common_type";

const content = [
  {
    name: 'Marco Rossi 1',
    specialty: 'Proprietà di Investimento',
  },
  {
    name: 'Marco Rossi 2',
    specialty: 'Proprietà di Investimento',
  },
  {
    name: 'Marco Rossi 3',
    specialty: 'Proprietà di Investimento',
  },
  {
    name: 'Marco Rossi 4',
    specialty: 'Proprietà di Investimento',
  },
  {
    name: 'Marco Rossi 5',
    specialty: 'Proprietà di Investimento',
  },
  {
    name: 'Marco Rossi 6',
    specialty: 'Proprietà di Investimento',
  },
  {
    name: 'Marco Rossi 7',
    specialty: 'Proprietà di Investimento',
  },
  {
    name: 'Marco Rossi 8',
    specialty: 'Proprietà di Investimento',
  },
]

const AgentCard = () => {

  const [allData,setData]=useState<agent_agencies []>([])

  const fetchAllAgent=async()=>{
    const ress=await getAllAgentApi()
    if(ress.status){
      setData(ress.data)
    }
  }
  
  useEffect(()=>{
    fetchAllAgent()
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



  console.log(allData)

  return (
    <div className="relative p-5 max-w-7xl mx-auto">
      <h1 className='text-black text-2xl font-bold mb-6'>Top Rated Real Estate Agents in Italy</h1>
      <div
        ref={scrollContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex flex-nowrap gap-4 overflow-x-auto p-3 w-full hide-scrollbar"
        style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
      >
        {allData&&allData.map((data,index) => (
          <div
            key={index}
            className="w-[280px] sm:w-[300px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
          >
            <Link href="#">
              <div className="flex justify-center pt-4">
                <Image
                  className="rounded-t-lg"
                  src={data.imageUrl}
                  alt="Technology acquisitions"
                  width={255}
                  height={235}
                
                />
              </div>
            </Link>
            <div className="flex items-center p-3 pl-6">
              <div className="flex text-yellow-400">
                <StarIcon key={1} className="h-5 w-5" />
                <StarIcon key={2} className="h-5 w-5" />
                <StarIcon key={3} className="h-5 w-5" />
              </div>
              <span className="text-black text-1 text-sm">(20 reviews)</span>
            </div>
            
            <div className="text-start pl-6">
                              <div >
                                <h5 className="text-lg font-medium text-gray-900">
                                  {data?.businessName}
                                </h5>
                              </div>
                              <p className="text-sm text-gray-500  mb-3">
                                {data.city.cityName},ITALY
                              </p>
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

      {/* <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}

    </div>
  );
}

export default AgentCard;