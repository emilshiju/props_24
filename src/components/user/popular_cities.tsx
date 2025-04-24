"use client"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react";
import { MagnifyingGlassIcon, StarIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const content = [
  {
    name: 'Turin',
    specialty: 'Proprietà di Investimento',
  },
  {
    name: 'Venince',
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

const Popular_Cities = () => {
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
        {content.map((a, b) => (
          <div
            key={b}
            className="w-[280px] sm:w-[350px] h-[200px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
          >
         
              <div className="flex items-center justify-center h-full w-full ">
                <h1 className="text-black">{a.name}</h1>
              
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