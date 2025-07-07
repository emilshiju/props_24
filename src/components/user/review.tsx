

import { StarIcon    } from '@heroicons/react/24/solid'
import {  CalendarIcon  } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { listSeparatedReviewApi } from '@/src/lib/api_service_client/user_service/review_handler'
import { reviewResType } from '@/src/type/components_type/all_users_type'
import {useRouter } from 'next/navigation'


const ListReview=({ profileId }: { profileId: string })=>{

  const router = useRouter()


    const [allData, setData] = useState<reviewResType[]>([]);

    

    const fetchAllReview=async()=>{

       const ress=await listSeparatedReviewApi(profileId)
       console.log(" list review dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
       console.log(ress.data)

       if(ress.status){
        setData(ress.data)
       }
       
    }

    useEffect(()=>{
        fetchAllReview()
    },[])


     const navigateToWriteReview=(profileId:string)=>{
    router.push(`/review/add/${profileId}`) 
  }




    
   



    return (

       

         <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <StarIcon className="h-6 w-6 text-yellow-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Recent Reviews</h2>
          </div>
          {/* <Link 
            href=''
            className="text-sm font-medium text-accent hover:text-accent/90"
          >
            Vedi tutte le 23 recensioni
          </Link> */}
        </div>
        <div className="border-t border-gray-200">
          {allData&&allData.map((data) => (
            <div key={data.id} className="px-4 py-5 sm:px-6 border-b border-gray-200 last:border-b-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-5 w-5 ${i < data.rating ? '' : 'opacity-30'}`} 
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-sm font-medium text-gray-900">{data.name}</p>
                </div>
                {data.createdAt && (
                  <div className="text-sm text-gray-500 flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {new Date(data.createdAt).toLocaleDateString('it-IT')}
                  </div>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-700">{data.content}</p>
            </div>
          ))}
          {/* {(!allData.length || allData.length === 0) && (
            <div className="px-4 py-5 sm:px-6">
              <p className="text-gray-500 italic">Nessuna recensione ancora. Sii il primo a lasciare una recensione!</p>
            </div>
          )} */}
        </div>
        <div className="px-4 py-4 sm:px-6 bg-gray-50">
          <div onClick={()=>navigateToWriteReview(profileId)}>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              Write a Review
            </button>
          </div>
        </div>
      </div>




    )
}

export default ListReview