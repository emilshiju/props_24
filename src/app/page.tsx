
import Link from 'next/link'


export const metadata = {
  title: 'Props24 - The TripAdvisor for Real Estate Agents',
  description: 'Find and review the best real estate agents in your area',
  icons: {
    icon: '/images/Asset 7.svg',
    apple: '/images/Asset 7.svg',
  },
}



const Home = ()=>{
  
  return (
    <div>
  <div className="min-h-screen flex flex-col items-center justify-start py-16 bg-white">
    {/* Title */}
    <h1 className="text-black font-extrabold text-4xl text-center mb-8">
      Find The Perfect Real Estate Agent?
    </h1>

    {/* Navigation Links */}
    <div className="flex space-x-6 mb-8">
      <Link 
        href="/agents" 
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-light"
      >
        Find Agent
      </Link>
      <Link 
        href="/agencies" 
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-light"
      >
        Find Agencies
      </Link>
      <Link 
        href="/locations" 
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-light"
      >
        Area
      </Link>
    </div>

    {/* Search Form - Moved Here */}
    <form className="w-full max-w-md">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50
            focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Home;