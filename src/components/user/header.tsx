"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter ,usePathname } from 'next/navigation';



const Header = () =>{



   const router = useRouter();
   const pathname = usePathname();

   
  
    const [inputSearch,setInputSearch]=useState('')
  
    const handleSearch=()=>{

      
      if (pathname === '/all') {
        router.replace(`/all?search=${inputSearch}`);
      } else {
        router.push(`/all?search=${inputSearch}`);
      }

      
      setInputSearch('')

    }
  
    const handleSearchBarChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setInputSearch(e.target.value)
    }
    



    return (
      
 <>

      <nav className="bg-white border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-25 py-5">
    <Link href='https://props-24.vercel.app'>
    <Image  
      src="/images/props_24.svg" 
      alt="Props24 Logo" 
      width={120} 
      height={40} 
      className="h-10 w-auto"
    ></Image>
    </Link>
     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {/* <Link href="" className="flex items-center py-2 px-3 text-gray-900 font-extrabold rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0">
              <UserCircleIcon className="h-6 w-6 mr-2 text-black" />
              SIGN IN
            </Link> */}
          </ul>
        </div>


  </div>



  <div className="flex justify-center items-center w-full">
  <div className="w-full max-w-xl">
      <label  className="mb-2 text-sm font-medium text-gray-900 sr-only">
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
  
          onClick={handleSearch}
          className="text-white absolute end-2.5 bottom-2.5 bg-[#2ab481] hover:bg-[#97e4c7]  focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </div>
    </div>



</nav>

    </>
    )
}

export default Header