"use client"
import { MagnifyingGlassIcon, StarIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

import Link from 'next/link'
import Image from 'next/image'
// import { useState } from "react";

// const FilterPage=()=>{


    

//     return (
//  <div>sdjfsno</div>
        
//     )
// }

// export default FilterPage



































// import { useState } from 'react';

// const ProductFilters = () => {
    
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
//     'mobile-color': false,
//     'mobile-category': false,
//     'mobile-size': false,
//     'color': false,
//     'category': false,
//     'size': false,
//   });

//   const toggleSection = (section: string) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const colorOptions = [
//     { id: 'white', label: 'White' },
//     { id: 'beige', label: 'Beige' },
//     { id: 'blue', label: 'Blue', checked: true },
//     { id: 'brown', label: 'Brown' },
//     { id: 'green', label: 'Green' },
//     { id: 'purple', label: 'Purple' },
//   ];

//   const categoryOptions = [
//     { id: 'new-arrivals', label: 'New Arrivals' },
//     { id: 'sale', label: 'Sale' },
//     { id: 'travel', label: 'Travel', checked: true },
//     { id: 'organization', label: 'Organization' },
//     { id: 'accessories', label: 'Accessories' },
//   ];

//   const sizeOptions = [
//     { id: '2l', label: '2L' },
//     { id: '6l', label: '6L' },
//     { id: '12l', label: '12L' },
//     { id: '18l', label: '18L' },
//     { id: '20l', label: '20L' },
//     { id: '40l', label: '40L', checked: true },
//   ];

//   const sortOptions = [
//     { name: 'Most Popular', href: '#', current: true },
//     { name: 'Best Rating', href: '#', current: false },
//     { name: 'Newest', href: '#', current: false },
//     { name: 'Price: Low to High', href: '#', current: false },
//     { name: 'Price: High to Low', href: '#', current: false },
//   ];

//   const categories = [
//     { name: 'Totes', href: '#' },
//     { name: 'Backpacks', href: '#' },
//     { name: 'Travel Bags', href: '#' },
//     { name: 'Hip Bags', href: '#' },
//     { name: 'Laptop Sleeves', href: '#' },
//   ];

//   return (
//     <>
   
//     <div className="bg-white">
   
//       <div>
      
//         {/* Mobile filter dialog */}
//         <div className={`relative z-40 lg:hidden ${mobileFiltersOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
        
//           <div className="fixed inset-0 bg-black/25" aria-hidden="true" onClick={() => setMobileFiltersOpen(false)}></div>

//           <div className="fixed inset-0 z-40 flex">
//             <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//               <div className="flex items-center justify-between px-4">
//                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                 <button
//                   type="button"
//                   className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                   onClick={() => setMobileFiltersOpen(false)}
//                 >
//                   <span className="sr-only">Close menu</span>
//                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Filters */}
//               <form className="mt-4 border-t border-gray-200">
//                 <h3 className="sr-only">Categories</h3>
//                 <ul role="list" className="px-2 py-3 font-medium text-gray-900">
//                   {categories.map((category) => (
//                     <li key={category.name}>
//                       <a href={category.href} className="block px-2 py-3">
//                         {category.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="border-t border-gray-200 px-4 py-6">
//                   <h3 className="-mx-2 -my-3 flow-root">
//                     <button
//                       type="button"
//                       className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
//                       onClick={() => toggleSection('mobile-color')}
//                       aria-expanded={expandedSections['mobile-color']}
//                     >
//                       <span className="font-medium text-gray-900">Color</span>
//                       <span className="ml-6 flex items-center">
//                         {expandedSections['mobile-color'] ? (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
//                           </svg>
//                         ) : (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                           </svg>
//                         )}
//                       </span>
//                     </button>
//                   </h3>
//                   {expandedSections['mobile-color'] && (
//                     <div className="pt-6" id="filter-section-mobile-0">
//                       <div className="space-y-6">
//                         {colorOptions.map((option) => (
//                           <div key={option.id} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid h-4 w-4 grid-cols-1">
//                                 <input
//                                   id={`filter-mobile-color-${option.id}`}
//                                   name="color[]"
//                                   value={option.id}
//                                   type="checkbox"
//                                   defaultChecked={option.checked}
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 />
//                                 <svg className="pointer-events-none col-start-1 row-start-1 h-3.5 w-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
//                                   <path className="opacity-0 group-has-[input:checked]:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label htmlFor={`filter-mobile-color-${option.id}`} className="min-w-0 flex-1 text-gray-500">
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="border-t border-gray-200 px-4 py-6">
//                   <h3 className="-mx-2 -my-3 flow-root">
//                     <button
//                       type="button"
//                       className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
//                       onClick={() => toggleSection('mobile-category')}
//                       aria-expanded={expandedSections['mobile-category']}
//                     >
//                       <span className="font-medium text-gray-900">Category</span>
//                       <span className="ml-6 flex items-center">
//                         {expandedSections['mobile-category'] ? (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
//                           </svg>
//                         ) : (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                           </svg>
//                         )}
//                       </span>
//                     </button>
//                   </h3>
//                   {expandedSections['mobile-category'] && (
//                     <div className="pt-6" id="filter-section-mobile-1">
//                       <div className="space-y-6">
//                         {categoryOptions.map((option) => (
//                           <div key={option.id} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid h-4 w-4 grid-cols-1">
//                                 <input
//                                   id={`filter-mobile-category-${option.id}`}
//                                   name="category[]"
//                                   value={option.id}
//                                   type="checkbox"
//                                   defaultChecked={option.checked}
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 />
//                                 <svg className="pointer-events-none col-start-1 row-start-1 h-3.5 w-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
//                                   <path className="opacity-0 group-has-[input:checked]:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label htmlFor={`filter-mobile-category-${option.id}`} className="min-w-0 flex-1 text-gray-500">
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="border-t border-gray-200 px-4 py-6">
//                   <h3 className="-mx-2 -my-3 flow-root">
//                     <button
//                       type="button"
//                       className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
//                       onClick={() => toggleSection('mobile-size')}
//                       aria-expanded={expandedSections['mobile-size']}
//                     >
//                       <span className="font-medium text-gray-900">Size</span>
//                       <span className="ml-6 flex items-center">
//                         {expandedSections['mobile-size'] ? (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
//                           </svg>
//                         ) : (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                           </svg>
//                         )}
//                       </span>
//                     </button>
//                   </h3>
//                   {expandedSections['mobile-size'] && (
//                     <div className="pt-6" id="filter-section-mobile-2">
//                       <div className="space-y-6">
//                         {sizeOptions.map((option) => (
//                           <div key={option.id} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid h-4 w-4 grid-cols-1">
//                                 <input
//                                   id={`filter-mobile-size-${option.id}`}
//                                   name="size[]"
//                                   value={option.id}
//                                   type="checkbox"
//                                   defaultChecked={option.checked}
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 />
//                                 <svg className="pointer-events-none col-start-1 row-start-1 h-3.5 w-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
//                                   <path className="opacity-0 group-has-[input:checked]:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label htmlFor={`filter-mobile-size-${option.id}`} className="min-w-0 flex-1 text-gray-500">
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>






//         <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
//           <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

//             <div className="flex items-center">
//               <div className="relative inline-block text-left">
//                 <div>
//                   <button
//                     type="button"
//                     className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
//                     id="menu-button"
//                     aria-expanded="false"
//                     aria-haspopup="true"
//                   >
//                     Sort
//                     <svg className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>

//                 <div
//                   className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none hidden"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="menu-button"
//                   tabIndex={-1}
//                 >
//                   <div className="py-1" role="none">
//                     {sortOptions.map((option) => (
//                       <a
//                         key={option.name}
//                         href={option.href}
//                         className={`block px-4 py-2 text-sm ${option.current ? 'font-medium text-gray-900' : 'text-gray-500'}`}
//                         role="menuitem"
//                         tabIndex={-1}
//                         id={`menu-item-${option.name}`}
//                       >
//                         {option.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>


//               </div>

//               <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
//                 <span className="sr-only">View grid</span>
//                 <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
//                 </svg>
//               </button>


//               <button
//                 type="button"
//                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//                 onClick={() => setMobileFiltersOpen(true)}
//               >
//                 <span className="sr-only">Filters</span>
//                 <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           <h2 className='ml-60'>shdiuhiuhhihihu</h2>
          
         




//           <section aria-labelledby="products-heading" className="pt-6 pb-24">
//             <h2 id="products-heading" className="sr-only">Products</h2>

//             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
//               {/* Filters */}
//               <form className="hidden lg:block">
//                 <h3 className="sr-only">Categories</h3>
//                 <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
//                   {categories.map((category) => (
//                     <li key={category.name}>
//                       <a href={category.href}>{category.name}</a>
//                     </li>
//                   ))}
//                 </ul>



//                 <div className="border-b border-gray-200 py-6">
//                   <h3 className="-my-3 flow-root">
//                     <button
//                       type="button"
//                       className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
//                       onClick={() => toggleSection('color')}
//                       aria-expanded={expandedSections['color']}
//                     >
//                       <span className="font-medium text-gray-900">Color</span>
//                       <span className="ml-6 flex items-center">
//                         {expandedSections['color'] ? (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
//                           </svg>
//                         ) : (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                           </svg>
//                         )}
//                       </span>
//                     </button>
//                   </h3>
//                   {expandedSections['color'] && (
//                     <div className="pt-6" id="filter-section-0">
//                       <div className="space-y-4">
//                         {colorOptions.map((option) => (
//                           <div key={option.id} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid h-4 w-4 grid-cols-1">
//                                 <input
//                                   id={`filter-color-${option.id}`}
//                                   name="color[]"
//                                   value={option.id}
//                                   type="checkbox"
//                                   defaultChecked={option.checked}
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 />
//                                 <svg className="pointer-events-none col-start-1 row-start-1 h-3.5 w-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
//                                   <path className="opacity-0 group-has-[input:checked]:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label htmlFor={`filter-color-${option.id}`} className="text-sm text-gray-600">
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>




//                 <div className="border-b border-gray-200 py-6">
//                   <h3 className="-my-3 flow-root">
//                     <button
//                       type="button"
//                       className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
//                       onClick={() => toggleSection('category')}
//                       aria-expanded={expandedSections['category']}
//                     >
//                       <span className="font-medium text-gray-900">Category</span>
//                       <span className="ml-6 flex items-center">
//                         {expandedSections['category'] ? (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
//                           </svg>
//                         ) : (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                           </svg>
//                         )}
//                       </span>
//                     </button>
//                   </h3>
//                   {expandedSections['category'] && (
//                     <div className="pt-6" id="filter-section-1">
//                       <div className="space-y-4">
//                         {categoryOptions.map((option) => (
//                           <div key={option.id} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid h-4 w-4 grid-cols-1">
//                                 <input
//                                   id={`filter-category-${option.id}`}
//                                   name="category[]"
//                                   value={option.id}
//                                   type="checkbox"
//                                   defaultChecked={option.checked}
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 />
//                                 <svg className="pointer-events-none col-start-1 row-start-1 h-3.5 w-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
//                                   <path className="opacity-0 group-has-[input:checked]:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label htmlFor={`filter-category-${option.id}`} className="text-sm text-gray-600">
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="border-b border-gray-200 py-6">
//                   <h3 className="-my-3 flow-root">
//                     <button
//                       type="button"
//                       className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
//                       onClick={() => toggleSection('size')}
//                       aria-expanded={expandedSections['size']}
//                     >
//                       <span className="font-medium text-gray-900">Size</span>
//                       <span className="ml-6 flex items-center">
//                         {expandedSections['size'] ? (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
//                           </svg>
//                         ) : (
//                           <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                           </svg>
//                         )}
//                       </span>
//                     </button>
//                   </h3>
//                   {expandedSections['size'] && (
//                     <div className="pt-6" id="filter-section-2">
//                       <div className="space-y-4">
//                         {sizeOptions.map((option) => (
//                           <div key={option.id} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid h-4 w-4 grid-cols-1">
//                                 <input
//                                   id={`filter-size-${option.id}`}
//                                   name="size[]"
//                                   value={option.id}
//                                   type="checkbox"
//                                   defaultChecked={option.checked}
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 />
//                                 <svg className="pointer-events-none col-start-1 row-start-1 h-3.5 w-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
//                                   <path className="opacity-0 group-has-[input:checked]:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label htmlFor={`filter-size-${option.id}`} className="text-sm text-gray-600">
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </form>

//               {/* Product grid */}
//               <div className="lg:col-span-3">
//                 {/* Your content */}
//               </div>
//             </div>
//           </section>

          
//         </main>














//       </div>
//     </div>
//     </>
//   );
// };

// export default ProductFilters;






























































import { useState } from 'react'
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

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
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

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

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
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
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
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
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
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
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
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
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
              {/* <div className="flex justify-center" > */}
              {/* <div className="sm:grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-4"> */}

                  <div
                            key='1'
                            className="w-[280px] sm:w-[285px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
                          >
                            <Link href="#">
                              <div className="flex justify-center pt-4">
                                <Image
                                  className="rounded-t-lg"
                                  src="/images/profile.png"
                                  alt="Technology acquisitions"
                                  width={245}
                                  height={235}
                                />
                              </div>
                            </Link>
                            <div className="flex items-center p-3 pl-6">
                              <div className="flex text-yellow-400">
                                <StarIcon key={1} className="h-5 w-5" />
                                <StarIcon key={2} className="h-5 w-5" />
                                <StarIcon key={3} className="h-5 w-5" />
                              </div>
                              <span className="text-black text-1 text-sm">(20 reviews)</span>
                            </div>
                            <div className="text-start pl-6">
                              <Link href="#">
                                <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                                  'okjio'
                                </h5>
                              </Link>
                              <p className="mb-3 font-normal text-gray-700 text-sm sm:text-base">
                                jhiuhiu
                              </p>
                            </div>
                          </div>


                          <div
                            key='2'
                            className="w-[280px] sm:w-[285px]  flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
                          >
                            <Link href="#">
                              <div className="flex justify-center pt-4">
                                <Image
                                  className="rounded-t-lg"
                                  src="/images/profile.png"
                                  alt="Technology acquisitions"
                                  width={245}
                                  height={235}
                                />
                              </div>
                            </Link>
                            <div className="flex items-center p-3 pl-6">
                              <div className="flex text-yellow-400">
                                <StarIcon key={1} className="h-5 w-5" />
                                <StarIcon key={2} className="h-5 w-5" />
                                <StarIcon key={3} className="h-5 w-5" />
                              </div>
                              <span className="text-black text-1 text-sm">(20 reviews)</span>
                            </div>
                            <div className="text-start pl-6">
                              <Link href="#">
                                <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                                  'okjio'
                                </h5>
                              </Link>
                              <p className="mb-3 font-normal text-gray-700 text-sm sm:text-base">
                                jhiuhiu
                              </p>
                            </div>
                          </div>



                          <div
                            key='3'
                            className="w-[280px] sm:w-[285px]  flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
                          >
                            <Link href="#">
                              <div className="flex justify-center pt-4">
                                <Image
                                  className="rounded-t-lg"
                                  src="/images/profile.png"
                                  alt="Technology acquisitions"
                                  width={245}
                                  height={235}
                                />
                              </div>
                            </Link>
                            <div className="flex items-center p-3 pl-6">
                              <div className="flex text-yellow-400">
                                <StarIcon key={1} className="h-5 w-5" />
                                <StarIcon key={2} className="h-5 w-5" />
                                <StarIcon key={3} className="h-5 w-5" />
                              </div>
                              <span className="text-black text-1 text-sm">(20 reviews)</span>
                            </div>
                            <div className="text-start pl-6">
                              <Link href="#">
                                <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                                  'okjio'
                                </h5>
                              </Link>
                              <p className="mb-3 font-normal text-gray-700 text-sm sm:text-base">
                                jhiuhiu
                              </p>
                            </div>
                          </div>



                          <div
                            key='4'
                            className="w-[280px] sm:w-[285px]  flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
                          >
                            <Link href="#">
                              <div className="flex justify-center pt-4">
                                <Image
                                  className="rounded-t-lg"
                                  src="/images/profile.png"
                                  alt="Technology acquisitions"
                                  width={245}
                                  height={235}
                                />
                              </div>
                            </Link>
                            <div className="flex items-center p-3 pl-6">
                              <div className="flex text-yellow-400">
                                <StarIcon key={1} className="h-5 w-5" />
                                <StarIcon key={2} className="h-5 w-5" />
                                <StarIcon key={3} className="h-5 w-5" />
                              </div>
                              <span className="text-black text-1 text-sm">(20 reviews)</span>
                            </div>
                            <div className="text-start pl-6">
                              <Link href="#">
                                <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                                  'okjio'
                                </h5>
                              </Link>
                              <p className="mb-3 font-normal text-gray-700 text-sm sm:text-base">
                                jhiuhiu
                              </p>
                            </div>
                          </div> 





              {/* </div> */}
              </div>
              </div>

              
            </div>


         




            
          </section>
        </main>
      </div>
    </div>
  )
}
