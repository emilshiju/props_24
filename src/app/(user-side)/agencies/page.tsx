"use client";

import Link from "next/link";
import Image from "next/image";
import {  useRouter } from "next/navigation";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import {
  getSideBarFilterAPi,
  getChangedSideBarFilterApi,
  getAllAgenciesApi,
} from "@/src/lib/api_service_client/user_service/filter_handler";
import { agent_agencies } from "@/src/type/components_type/common_type";
import ReviewStars from "@/src/components/user/reviewStars";
import FilterSkeleton from "@/src/components/user/filter_skeleton";
import { FilterOption, FilterSection_Type } from "@/src/type/components_type/filter_type";

export default function Agencies() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [sideBarFilter, setSideBarFilter] = useState<FilterSection_Type[]>([]);

  const [listAllFilteredProduct, setAllFilteredProduct] = useState<
    agent_agencies[]
  >([]);

  const [showSkeleton, setSkeleton] = useState(true);

  const router = useRouter();

  const fetchSideBarFilter = async () => {
    const sideBarFilter = await getSideBarFilterAPi();

    if (sideBarFilter.status) {
      console.log("gotttttttttttttt filterrrrrrrrrrrrrrrrrrrrrrrrrrr");
      console.log(sideBarFilter.data);
      setSideBarFilter(sideBarFilter.data);
    }
  };

  const fetchAllAgencies = async () => {
    // setSkeleton(true)
    const ress = await getAllAgenciesApi();
    setSkeleton(false);

    if (ress.status) {
      console.log("got all", ress.data);
      setAllFilteredProduct(ress.data);
    }
  };

  useEffect(() => {
    fetchAllAgencies();

    fetchSideBarFilter();
  }, []);

  const changeSideBarFiltering = async (
    sectionName: string,
    valueId: string,
    isChecked: boolean
  ) => {
    const updatedSideBarFilter: FilterSection_Type[] = sideBarFilter.map((data:FilterSection_Type) => {
      if (data.name == sectionName) {
        console.log("got", data.name);
        data.options = data.options.map((one: FilterOption) => {
          if (one.value === valueId) {
            console.log("secc", one.value);
            return { ...one, checked: isChecked }; // Set the checked value accordingly
          }
          return one;
        });
      }

      return data;
    });
    console.log("updated side bar filterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    console.log(updatedSideBarFilter)

    setSideBarFilter(updatedSideBarFilter);

    setSkeleton(true);

    const filteredResult = await getChangedSideBarFilterApi({
      updatedSideBarFilter,
      sectionName: sectionName,
      value: valueId,
      status: isChecked ,
      item:"agencies"
  });

    setSkeleton(false);

    setAllFilteredProduct(filteredResult.data);
  };

  const navigateToDetailPage = (id: string) => {
    router.push(`/viewDetails/${id}`);
  };

  return (
    <>
      {showSkeleton && <FilterSkeleton />}
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Dialog
            open={mobileFiltersOpen}
            onClose={setMobileFiltersOpen}
            className="relative z-40 lg:hidden"
          >
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
                  {sideBarFilter.map((section:FilterSection_Type) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      <h3 className="-mx-2 -my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="size-5 group-data-open:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="size-5 group-not-data-open:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option:FilterOption, optionIdx:number) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                    onChange={(e) =>
                                      changeSideBarFiltering(
                                        section.name,
                                        option.value,
                                        e.target.checked
                                      )
                                    }
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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Agencies
              </h1>

              <div className="flex items-center">
                <Menu
                  as="div"
                  className="relative inline-block text-left"
                ></Menu>

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
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="size-5 group-data-open:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="size-5 group-not-data-open:hidden"
                            />
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
                                    onChange={(e) =>
                                      changeSideBarFiltering(
                                        section.name,
                                        option.value,
                                        e.target.checked
                                      )
                                    }
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
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="text-sm text-gray-600"
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

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                    {listAllFilteredProduct &&
                      listAllFilteredProduct.map((data, index) => (
                        <div
                          onClick={() => navigateToDetailPage(data.id)}
                          key={index}
                          className="w-[280px] sm:w-[285px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm scroll-snap-align-start"
                        >
                          <Link href="#">
                            <div className="flex justify-center pt-4">
                              <Image
                                className="rounded-t-lg"
                                src={data?.imageUrl}
                                alt="Technology acquisitions"
                                width={245}
                                height={235}
                              />
                            </div>
                          </Link>

                          {/* review section */}
                          <ReviewStars reviews={data.reviews || []} />

                          <div className="text-start pl-6">
                            <div>
                              <h5 className="text-lg font-medium text-gray-900">
                                {data?.businessName}
                              </h5>
                            </div>
                            <p className="text-sm text-gray-500  mb-3">
                              {data.city.cityName},ITALY
                            </p>
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
    </>
  );
}
