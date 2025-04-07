
import { MagnifyingGlassIcon, StarIcon } from '@heroicons/react/24/solid'



const Why_props_24 = () =>{

    return (
        
         <div>
          <h2 className="text-2xl font-bold text-primary mb-6 ">Why Props24?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-accent " />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Trusted Reviews</h3>
              <p className="text-gray-600">Read authentic reviews from real customers about their experiences.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-light/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-primary-light" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Experienced Agents</h3>
              <p className="text-gray-600">Find agents with proven experience and specialized skills.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Local Knowledge</h3>
              <p className="text-gray-600">Get information from agents who know your area inside out.</p>
            </div>
          </div>
        </div>
        
    )
}

export default Why_props_24