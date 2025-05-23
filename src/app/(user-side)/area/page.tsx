"use client"
import { MapPinIcon, HomeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { sampleLocations } from '@/src/util/data/sampleData'
import { useEffect, useState } from 'react';
import { cityAndDetaield, cityResType } from '@/src/type/components_type/all_admin_type';
import { listAllCityApi } from '@/src/lib/api_service_client/user_service/area_handler';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import Loader from '@/src/components/loader';



const AllLocation=()=>{

    

    const [allCity,setAllCity]=useState<cityAndDetaield []>([])

    const router = useRouter()
    

    const fetchAllCity=async()=>{

        const ress=await listAllCityApi()

        if(ress.status){
            const filtered = ress.data.filter((city:cityAndDetaield)=> city.details)
            setAllCity(filtered)
        }else{

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
        
      </div>
    </div>
 ))}
</div>

    





    





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