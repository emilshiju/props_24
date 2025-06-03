



const FilterSkeleton=()=>{
    return (

        <div className="bg-white">
  <div>
    {/* Mobile filter dialog skeleton */}
    <div className="relative z-40 lg:hidden">
      <div className="fixed inset-0 bg-black/25 animate-pulse"></div>
      <div className="fixed inset-0 z-40 flex">
        <div className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <div className="h-6 w-24 rounded bg-gray-200"></div>
            <div className="h-10 w-10 rounded-md bg-gray-200"></div>
          </div>
          
          {/* Filters skeleton */}
          <div className="mt-4 border-t border-gray-200">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-t border-gray-200 px-4 py-6">
                <div className="flex justify-between items-center">
                  <div className="h-5 w-32 rounded bg-gray-200"></div>
                  <div className="h-5 w-5 rounded bg-gray-200"></div>
                </div>
                <div className="pt-6 space-y-4">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex gap-3">
                      <div className="h-5 w-5 rounded-sm bg-gray-200"></div>
                      <div className="h-5 w-24 rounded bg-gray-200"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
        <div className="h-10 w-48 rounded bg-gray-200"></div>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-md bg-gray-200"></div>
        </div>
      </div>

      <section className="pt-6 pb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Desktop filters skeleton */}
          <div className="hidden lg:block">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-gray-200 py-6">
                <div className="flex justify-between items-center">
                  <div className="h-5 w-32 rounded bg-gray-200"></div>
                  <div className="h-5 w-5 rounded bg-gray-200"></div>
                </div>
                <div className="pt-6 space-y-4">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex gap-3">
                      <div className="h-5 w-5 rounded-sm bg-gray-200"></div>
                      <div className="h-5 w-24 rounded bg-gray-200"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Product grid skeleton */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-[280px] sm:w-[285px] flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex justify-center pt-4">
                    <div className="w-[245px] h-[235px] rounded-t-lg bg-gray-200 animate-pulse"></div>
                  </div>
                  
                  <div className="px-6 py-2">
                    <div className="h-4 w-full rounded bg-gray-200 mb-2"></div>
                    <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                  </div>
                  
                  <div className="text-start pl-6 pb-4">
                    <div className="h-5 w-40 rounded bg-gray-200 mb-2"></div>
                    <div className="h-4 w-32 rounded bg-gray-200"></div>
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

export default FilterSkeleton