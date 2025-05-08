"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import AgentCard from '../../components/user/agent_card'
import AgenciesCard from '../../components/user/agencies_card'
import Why_props_24 from '../../components/user/why_props_24'
import Footer from '../../components/user/footer'
import Popular_Cities from '../../components/user/popular_cities'
import { useState } from 'react';

// export const metadata = {
//   title: 'Props24 - The TripAdvisor for Real Estate Agents',
//   description: 'Find and review the best real estate agents in your area',
//   icons: {
//     icon: '/images/Asset 7.svg',
//     apple: '/images/Asset 7.svg',
//   },
// }



const Home = ()=>{

  const router = useRouter();

  const [inputSearch,setInputSearch]=useState('')

  const handleSearch=()=>{

    router.push(`/filterPage?search=${inputSearch}`)
  }

  const handleSearchBarChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputSearch(e.target.value)
  }
  
  return (
    <div>
  <div className="min-h-screen flex flex-col items-center justify-start py-6 sm:py-14 bg-white  mx-auto px-4">
    {/* Title */}
    <h1 className="text-black font-extrabold text-4xl text-center mb-6 sm:mb-6 ">
      Find The Perfect Real Estate Agent?
    </h1>

    {/* Navigation Links */}
    <div className="flex space-x-16 mb-0">
      <Link 
        href="/agent" 
        className="inline-flex items-center px-3 py-2 font-trip text-[18px] font-bold  text-gray-900 hover:text-primary-light"
      >
       
        {/* Find Agent */}
        <img 
    src="icons/agent.png"
    alt="Agent Icon" 
    className="w-8 h-6 object-contain pr-0"
  />
 
  <span className='pt-1'> Find Agent</span>
      </Link>

      <Link 
        href="/agencies" 
        className="inline-flex items-center px-3 py-2 font-trip text-[18px] font-bold text-gray-900 hover:text-primary-light"
      >
         <img 
    src="icons/agency.png"
    alt="Agent Icon" 
    className="w-8 h-6 object-contain pr-1"
  />
 
  <span className='pt-1'> Find Agency</span>
     
        {/* Find Agencies */}
      </Link>
      <Link 
        href="/area" 
        className="inline-flex items-center px-3 py-2 font-trip text-[18px] font-bold text-gray-900 hover:text-primary-light"
      >

<img 
    src="icons/city.png"
    alt="Agent Icon" 
    className="w-8 h-7 object-contain pr-0"
  />
 
  <span className='pt-1'> Area </span>

        
      </Link>
    </div>

    {/* Search Form - Moved Here */}
    {/* <form className="w-full max-w-xl">
      <label onClick={handleSearch} className="mb-2 text-sm font-medium text-gray-900 sr-only">
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
          value={inputSearch}
          onChange={handleSearchBarChange}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50
            focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Agent, Agencies..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-[#2ab481] hover:bg-[#97e4c7]  focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form> */}

    <br></br>
    <div className="w-full max-w-6xl px-4">
    <Image 
    className='pt-6 '
  src='/images/banner.png'
  width={1230} 
  height={920}  
  alt='banner'></Image>
  </div>
  <br></br>
  <br></br>
  <br></br>
  
  <div className="w-full">
    
          <AgentCard />
        </div>
        <div className="w-full">
          <AgenciesCard  />
        </div>
        <div className="w-full max-w-7xl px-4">
        <Popular_Cities  />        
        </div>
        <br></br>
  <br></br>
        <div className="w-full max-w-7xl px-4">
        <Why_props_24  />        
        </div>
        <br></br>
  <br></br>
       
       
</div>



  </div>



  )
}

export default Home;