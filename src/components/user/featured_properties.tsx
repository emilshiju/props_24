

import {  MapPinIcon, HomeIcon,} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { getPropertyDetailsApi } from '@/src/lib/api_service_client/user_service/profile_handler'
import { useEffect, useState } from 'react'
import { property_type } from '@/src/type/components_type/common_type'
import Image from 'next/image';

const FeaturedProperties=({ profileId }: { profileId: string })=>{


    
    

    const [allData,setData]=useState<property_type []>([])
    console.log("i gottttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt")
    console.log(allData)

    const fetchAllPropertyDetails=async()=>{

        const ress=await getPropertyDetailsApi(profileId)

        if(ress.status){
            setData(ress.data)
        }

    }

    useEffect(()=>{

        fetchAllPropertyDetails()

    },[])
    

    



    return (

        <div>

             {/* Featured Properties */}
                  <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                      <div className="flex items-center">
                        <HomeIcon className="h-6 w-6 text-primary mr-2" />
                        <h2 className="text-xl font-semibold text-gray-900">Featured Properties</h2>
                      </div>
                      <Link href={`/properties?agent`} className="text-sm font-medium text-accent hover:text-accent/90">
                        {/* Vedi tutte */}
                      </Link>
                    </div>
                    <div className="border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                        {allData.map(property => (
                          <div key={property.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-gray-300 relative">
                              {/* <img 
                                src={property.imageUrl} 
                                alt={property.name} 
                                className="h-full w-full object-cover"
                              /> */}
                                <Image
    src={property.imageUrl}
    alt={property.name}
    fill
    className="object-cover"
  />
                              {/* <div className="absolute top-2 right-2">
                                <button className="p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
                                  <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
                                </button>
                              </div> */}
                              <div className="absolute bottom-2 left-2 bg-accent text-white text-sm font-bold px-2 py-1 rounded">
                                {property.price}
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium text-gray-900 line-clamp-1">{property.name}</h3>
                              <p className="text-sm text-gray-500 mt-1 mb-2 flex items-center">
                                <MapPinIcon className="h-4 w-4 mr-1" />
                                {property.city.cityName}
                              </p>
                              <div className="flex justify-between text-sm text-gray-600">
                                <span className="flex items-center">
                                  <span className="font-medium">{property.bathroom}</span>
                                  <span className="ml-1">camere</span>
                                </span>
                                <span className="flex items-center">
                                  <span className="font-medium">{property.room}</span>
                                  <span className="ml-1">bagni</span>
                                </span>
                                <span className="flex items-center">
                                  <span className="font-medium">{property.sm}</span>
                                  <span className="ml-1">m²</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
            
            
        </div>
    )
}

export default FeaturedProperties