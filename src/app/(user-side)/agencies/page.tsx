

"use client"
import { MagnifyingGlassIcon, StarIcon, MapPinIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams,useRouter,usePathname } from 'next/navigation'

import { useState ,useEffect} from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { listCityApi } from '@/src/lib/api_service_client/admin_service/city_handler'
import { listSpecializationApi } from '@/src/lib/api_service_client/admin_service/specialization_handler'
import { cityResType, specialisation_Res_Type } from '@/src/type/components_type/all_admin_type'
import {  getSideBarFilterAPi ,getChangedSideBarFilterApi, getAll, getAllSearchedListApi, getAllAgentApi, getAllAgenciesApi} from '@/src/lib/api_service_client/user_service/filter_handler'
import { string } from 'yup'
import { agent_agencies } from '@/src/type/components_type/common_type'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Agent', href: '#' },
  { name: 'Agencies', href: '#' },
  // { name: 'Travel Bags', href: '#' },
  // { name: 'Hip Bags', href: '#' },
  // { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Agencies() {
    
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [sideBarFilter,setSideBarFilter]=useState<FilterSection_Type []>([])

  const [listAllFilteredProduct,setAllFilteredProduct]=useState<agent_agencies []>([])


  const router = useRouter()
  
  
  const fetchSideBarFilter=async()=>{

        const sideBarFilter = await  getSideBarFilterAPi()

        if(sideBarFilter.status){
          console.log("gotttttttttttttt filterrrrrrrrrrrrrrrrrrrrrrrrrrr")
          console.log(sideBarFilter.data)
          setSideBarFilter(sideBarFilter.data)
        }

  }


  const fetchAllAgencies=async()=>{

    const ress= await getAllAgenciesApi()

    if(ress.status){
      // setAll(ress.data)
      console.log("got all",ress.data)
      setAllFilteredProduct(ress.data)
    }

  }

  


  

  useEffect(()=>{

   

        fetchAllAgencies()
   

    fetchSideBarFilter()

  },[])

  



  const changeSideBarFiltering=async(sectionName:string,valueId:string,isChecked:boolean)=>{
    console.log("got valueee idddddddddddddddddddddddddddd")
    
    console.log(sectionName,valueId,isChecked)
    


   const updatedSideBarFilter:any= sideBarFilter.map((data:any,index)=>{

      if(data.name==sectionName){
        console.log("got",data.name)
        data.options = data.options.map((one:any)=>{
          
          if (one.value === valueId) {
            console.log("secc",one.value)
            return { ...one, checked: isChecked }; // Set the checked value accordingly
          }
          return one
        })
      }

      return data;

    })
    
    setSideBarFilter(updatedSideBarFilter); 



      
    const filteredResult = await  getChangedSideBarFilterApi(updatedSideBarFilter,{sectionName:sectionName},{value:valueId},{status:isChecked},'agencies')
    
    setAllFilteredProduct(filteredResult.data)

  
  }


  const navigateToDetailPage=(id:string)=>{
    router.push(`/viewDetails/${id}`) 
  }


  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />




          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {/* <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <div  className="block px-2 py-3">
                        {category.name}
                      </div>
                    </li>
                  ))}
                </ul> */}

                {sideBarFilter.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  onChange={(e)=>changeSideBarFiltering(section.name,option.value, e.target.checked)}
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>










        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Agencies</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                {/* <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div> */}

                {/* <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems> */}
              </Menu>

              {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button> */}
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button> 
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>





            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}



              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>



                {sideBarFilter.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section?.options?.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  onChange={(e)=>changeSideBarFiltering(section.name,option.value, e.target.checked)}
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}


              </form>












              {/* Product grid */}
              <div className="lg:col-span-3">
                
              
                <div className="flex flex-wrap justify-center sm:justify-start gap-4">
           
              {listAllFilteredProduct&&listAllFilteredProduct.map((data,index)=>(
                
                <div
                onClick={()=>navigateToDetailPage(data.id)}
                key={index}
                className="w-[280px] sm:w-[400px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
              >
                
                  <div className="flex items-center p-3 pl-6">
                    <Image
                      className="rounded-t-lg"
                      src={data?.imageUrl}
                      alt="Technology acquisitions"
                      width={160}
                      height={110}
                    />
                    <div className="pl-4 flex flex-col">
                      <h1 className="text-lg font-medium text-gray-900">{data.businessName}</h1>
                      <h1 className="text-sm text-gray-500 pt-1">{data?.city?.cityName},Italy</h1>
                    </div>
                  </div>
              
              
                <div className="flex items-center p-3 pl-6">
                  <div className="flex text-yellow-400">
                    <StarIcon key={1} className="h-5 w-5" />
                    <StarIcon key={2} className="h-5 w-5" />
                    <StarIcon key={3} className="h-5 w-5" />
                  </div>
                  <span className="text-black text-sm sm:text-base">(20 reviews)</span>
                </div>
              
                <div className="flex justify-start text-start  px-6">
                  {/* <Link href="#">
                    <h5 className="mb-2 text-sm sm:text-sm font-bold tracking-tight text-gray-900">
                      {data?.specialization.title}
                    </h5>
                  </Link>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Proprietà Vendute</dt>
                    <dd className="mt-1 text-sm text-gray-900">2323+</dd>
                  </div> */}
                
                </div>
              
                <div className="flex items-center mt-4 mb-4 px-6">
                  <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    View Agency
                  </button>
                </div>
              </div>
              

                        ))}
              </div>


              </div>

              






            </div>


         




            
          </section>
        </main>
      </div>
    </div>
  )
}
