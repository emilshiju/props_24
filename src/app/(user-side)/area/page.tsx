"use client"
import { MapPinIcon, HomeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { sampleLocations } from '@/src/util/data/sampleData'
import { useEffect, useState } from 'react';
import { cityResType } from '@/src/type/components_type/all_admin_type';
import { listAllCityApi } from '@/src/lib/api_service_client/user_service/area_handler';

const locations = sampleLocations.slice(0, 12);


const AllLocation=()=>{

    const [allCity,setAllCity]=useState<cityResType []>([])

    const fetchAllCity=async()=>{

        const ress=await listAllCityApi()

        if(ress.status){
            setAllCity(ress.data)
        }

    }

    useEffect(()=>{
        fetchAllCity()

    },[])

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCity.map((data) => (
          <Link href={`/locations`} key={data.id} className="group">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
              <div className='bg-gradient-to-r from-primary to-primary-light p-6'>
                <h2 className="text-xl font-bold text-white">{data.cityName}</h2>
                <div className="mt-2 flex items-center text-white/80">
                  <MapPinIcon className="h-5 w-5 mr-1" />
                  <span>{data.country}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 line-clamp-2 mb-4">La Città Eterna, capitale d\'Italia e cuore pulsante della storia occidentale. Con il suo patrimonio artistico e archeologico inestimabile, dal Colosseo ai Fori Romani, dalla Fontana di Trevi al Vaticano, Roma offre un\'esperienza immobiliare unica immersa in 2700 anni di storia.</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <HomeIcon className="h-5 w-5 text-gray-400 mr-1.5" />
                    <span>480+ proprietà disponibili</span>
                  </div>
                  <div className="text-accent group-hover:underline text-sm font-medium">
                    Visualizza dettagli &rarr;
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Pronto a trovare la tua casa ideale in Italia?</h2>
            <p className="mt-3 text-lg text-white/80">
              Connettiti con agenti specializzati nella zona che preferisci.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center md:flex-shrink-0">
            <Link href="/agents">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors">
                Trova un Agente
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