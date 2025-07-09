import { getDetailedCityApi } from "@/src/lib/api_service_server/user_service/area_handler";
import { cityAndDetaield } from "@/src/type/components_type/all_admin_type";

import {
  MapPinIcon,

  HomeIcon,

} from "@heroicons/react/24/solid";

import Link from "next/link";

export default async function DetailsCity({ params }: {params: Promise<{ id: string }>}) {
  const { id } =await  params;
  const ress = await getDetailedCityApi(id);
  {console.log("00000000000000000000000000000000000000000000000000000000000000")}
  console.log(ress.status)
  console.log("11111111111111111111111111111111111111111111111111111111111111111")
  if (!ress.status) {
    return <div>Error fetching city details.</div>;
  }

  const alldata: cityAndDetaield = ress.data;

  console.log("got all data");
  console.log(alldata);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Location Header */}
      <div
        className={`bg-gradient-to-br from-primary to-primary-light  rounded-lg shadow-lg overflow-hidden mb-8`}
      >
        <div className="px-6 py-12 sm:px-10 sm:py-16 text-white">
          <h1 className="text-3xl font-bold sm:text-4xl mb-2">
            {alldata.cityName}
          </h1>
          <div className="flex items-center mb-6">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span> {alldata.country} , Italy</span>
          </div>
          <p className="text-white/90 text-lg max-w-3xl mb-8">
            {alldata.details?.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/90">
            <div>
              <p className="text-sm uppercase tracking-wider opacity-75">
                Average Price
              </p>
              <p className="text-xl font-semibold mt-1">
                {alldata.details?.averagePrice}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider opacity-75">
                Popularity
              </p>
              <p className="text-xl font-semibold mt-1">
                {alldata.details?.popularity}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider opacity-75">
                Available Properties
              </p>
              <p className="text-xl font-semibold mt-1">
                {alldata.details?.availableProperties}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                About Milan
              </h2>
            </div>

            <div className="p-6 whitespace-pre-line">
              {alldata.details?.aboutContent}
              {/* <p className="text-gray-700 mb-4">
             Questa vivace zona offre un perfetto connubio tra architettura storica, servizi comodi e un'atmosfera vivace che attira sia i locali che i nuovi arrivati.
              </p>
              <p className="text-gray-700 mb-4">
                I residenti di  godono di facile accesso ai trasporti pubblici, numerosi ristoranti, caffè e opzioni di shopping. Il quartiere ha visto un costante apprezzamento dei valori immobiliari nell'ultimo decennio, rendendolo un'opzione attraente sia per i proprietari che per gli investitori.
              </p>
              <p className="text-gray-700">
                Con  attualmente sul mercato, gli acquirenti hanno diverse opzioni, dagli appartamenti storici alle proprietà recentemente ristrutturate. Il prezzo medio di  riflette l'alta desiderabilità di questa zona.
              </p> */}
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Area Details
              </h2>
            </div>
            <div className="p-6">
              <dl className="grid grid-cols-1 gap-y-4">
                {alldata.details?.areas.map((data, index) => (
                  <div key={index}>
                    <dt className="text-sm font-medium text-gray-500">
                      {data.heading}
                    </dt>
                    <dd className="mt-1 text-gray-900">{data.content}</dd>
                  </div>
                ))}
              </dl>
              {/* <dl className="grid grid-cols-1 gap-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Scuole</dt>
                  <dd className="mt-1 text-gray-900">5 scuole nella zona</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Trasporti Pubblici</dt>
                  <dd className="mt-1 text-gray-900">Ottima connettività</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Shopping</dt>
                  <dd className="mt-1 text-gray-900">Molteplici opzioni nelle vicinanze</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Parchi</dt>
                  <dd className="mt-1 text-gray-900">2 parchi a breve distanza</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Sicurezza</dt>
                  <dd className="mt-1 text-gray-900">Sopra la media</dd>
                </div>
              </dl> */}
            </div>
          </div>
        </div>
      </div>

      {/* Property Types */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Types of Property in Milan{" "}
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {alldata.details?.types.map((data, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <HomeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {data.heading}
                </h3>
                <p className="text-gray-600 mb-2">{data.content}</p>
                <p className="text-sm text-gray-500">
                  Average Price:{" "}
                  <span className="font-medium">{data.price}</span>
                </p>
              </div>
            ))}

            {/* <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <HomeIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Edifici Storici</h3>
              <p className="text-gray-600 mb-2">20% delle proprietà</p>
              <p className="text-sm text-gray-500">Prezzo Medio: <span className="font-medium">€4,200 - €6,500 per m²</span></p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <HomeIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Nuove Costruzioni</h3>
              <p className="text-gray-600 mb-2">10% delle proprietà</p>
              <p className="text-sm text-gray-500">Prezzo Medio: <span className="font-medium">€3,900 - €5,800 per m²</span></p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <HomeIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Attici</h3>
              <p className="text-gray-600 mb-2">5% delle proprietà</p>
              <p className="text-sm text-gray-500">Prezzo Medio: <span className="font-medium">€5,500 - €8,000 per m²</span></p>
            </div> */}
          </div>
        </div>
      </div>

      

      {/* Call to Action */}
      <div className="bg-primary rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8 sm:px-10 sm:py-12 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left max-w-lg mx-auto md:mx-0">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to find your ideal home in Milan ?
            </h2>
            <p className="mt-3 text-lg text-primary-light">
              Our top rated agents specialize in this area and can help you find
              the perfect property.
            </p>
          </div>
          <div className="mt-8 md:mt-0 text-center">
            <Link href="/agent">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Contact an Agent
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default DetailsCity;
