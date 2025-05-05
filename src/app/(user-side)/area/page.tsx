"use client"
import { MapPinIcon, HomeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { sampleLocations } from '@/src/util/data/sampleData'
import { useEffect, useState } from 'react';
import { cityAndDetaield, cityResType } from '@/src/type/components_type/all_admin_type';
import { listAllCityApi } from '@/src/lib/api_service_client/user_service/area_handler';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
const locations = sampleLocations.slice(0, 12);


const AllLocation=()=>{

    const [allCity,setAllCity]=useState<cityAndDetaield []>([])

    const router = useRouter()
    

    const fetchAllCity=async()=>{

        const ress=await listAllCityApi()

        if(ress.status){
            setAllCity(ress.data)
        }

    }

    useEffect(()=>{
        fetchAllCity()

    },[])



    const navigateDetailedPage=(id:string)=>{
      router.push(`/area/${id}`)
    }

    return (

        <div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Header */}
      <div className="mb-12 bg-gradient-to-r from-primary to-primary-light py-12 px-6 rounded-xl text-center text-white">
        <h1 className="text-3xl font-bold sm:text-4xl mb-4">Explore Italian Cities</h1>
        <p className="text-lg text-primary-light/90 max-w-2xl mx-auto">
        Discover the main cities and areas that make Italy an extraordinary country
        </p>
      </div>






      {/* Location grid - Improved layout */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCity&&allCity.map((data) => (
          <Link href={`/area/${data.id}`} key={data.id} className="group">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
              <div className='bg-gradient-to-r from-primary to-primary-light p-6'>

              <Image
      src={data?.details?.image||'https://w0.peakpx.com/wallpaper/773/949/HD-wallpaper-italy-village-town-boats-cute-houses-city.jpg'}
      alt={`${data.cityName} banner`}
      width={800}
  height={400}
      
    />

    
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 line-clamp-2 mb-4">The Eternal City, capital of Italy and the beating heart of Western history. With its priceless artistic and archaeological heritage—from the Colosseum to the Roman Forum, from the Trevi Fountain to the Vatican—Rome offers a unique real estate experience immersed in 2,700 years of history.</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <HomeIcon className="h-5 w-5 text-gray-400 mr-1.5" />
                    <span>480+ properties available</span>
                  </div>
                  <div className="text-accent group-hover:underline text-sm font-medium">
                  View details &rarr;
                  </div>
                </div>
              </div>
            
          </Link>
        ))}
      </div> */}



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{allCity&&allCity.map((data,index) => (

      <div key={index}  onClick={()=>navigateDetailedPage(data.id)} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
      
      <Image
      src={data?.details?.imageUrl||'https://w0.peakpx.com/wallpaper/773/949/HD-wallpaper-italy-village-town-boats-cute-houses-city.jpg'}
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
        {/* <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}
      </div>
    </div>
 ))}
</div>

    





    
      {/* <div className="mt-10 text-center">
        <Link href="/locations">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
            Visualizza Tutte le Città
          </button>
        </Link>
      </div> */}




{/*      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Zone di Tendenza</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.slice(0, 3).map((location) => (
            <Link href={`/locations/${location.slug}`} key={`featured-${location.slug}`} className="group">
              <div className={`bg-gradient-to-r ${location.bgColor} p-6 rounded-lg text-white h-full`}>
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-white/80 mb-4 line-clamp-2">{location.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/90">
                    <BuildingOfficeIcon className="h-5 w-5 mr-1.5" />
                    <span>Prezzo: {location.averagePrice}</span>
                  </div>
                  <div className="text-white group-hover:underline text-sm font-medium">
                    Esplora &rarr;
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}





      {/* CTA Section - Enhanced */}
      <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-10 sm:px-10 sm:py-12 md:flex md:items-center md:justify-between">
          <div className="max-w-lg mx-auto md:mx-0 md:max-w-xl text-center md:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to find your ideal home in Italy?</h2>
            <p className="mt-3 text-lg text-white/80">
            Connect with agents who specialize in your preferred area.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center md:flex-shrink-0">
            <Link href="/agents">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors">
               Find An Agent
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>


        </div>
    )
}

export default AllLocation