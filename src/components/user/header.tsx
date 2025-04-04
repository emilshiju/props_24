
import Link from 'next/link'
import Image from 'next/image'
import { MagnifyingGlassIcon, HeartIcon, UserCircleIcon, Bars3Icon, StarIcon } from '@heroicons/react/24/outline'




const Header = () =>{

    return (

      <nav className="bg-white border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-25 py-5">
    <Image  
      src="/images/Asset 2.svg" 
      alt="Props24 Logo" 
      width={120} 
      height={40} 
      className="h-10 w-auto"
    ></Image>
    
     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <Link href="" className="flex items-center py-2 px-3 text-gray-900 font-extrabold rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0">
              <UserCircleIcon className="h-6 w-6 mr-2 text-black" />
              SIGN IN
            </Link>
          </ul>
        </div>


  </div>
</nav>

      //   <nav className="bg-primary text-white">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="flex justify-between h-16">
      //       {/* Left section */}
      //       <div className="flex items-center">
      //         {/* Mobile menu button */}
      //         <button className="sm:hidden p-2">
      //           <Bars3Icon className="h-6 w-6" />
      //         </button>
      //         {/* Logo */}
      //         <Link href="/" className="flex-shrink-0 flex items-center">
      //           <Image 
      //             src="/images/Asset 2.svg" 
      //             alt="Props24 Logo" 
      //             width={120} 
      //             height={40} 
      //             className="h-10 w-auto"
      //           />
      //         </Link>
      //         {/* Search bar */}
      //         <div className="hidden sm:flex sm:ml-6 items-center flex-1 max-w-2xl">
      //           <form action="/search" method="GET" className="w-full relative">
      //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      //               <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      //             </div>
      //             <input
      //               type="text"
      //               name="q"
      //               className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
      //               placeholder="Cerca agenti o zone in Italia..."
      //             />
      //           </form>
      //         </div>
      //       </div>

      //       {/* Right section */}
          
      //       <div className="flex items-center space-x-4">
      //         <Link href="/reviews/new" className="hidden sm:flex items-center text-sm font-medium text-white hover:text-gray-200">
      //           <StarIcon className="h-6 w-6 mr-1" />
      //           <span>Scrivi Recensione</span>
      //         </Link>
      //         <Link href="/auth/login" className="flex items-center text-sm font-medium text-white hover:text-gray-200">
      //           <UserCircleIcon className="h-6 w-6 mr-1" />
      //           <span className="hidden sm:inline">Accedi</span>
      //         </Link>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    )
}

export default Header