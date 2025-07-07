"use client";
import { Formik, Form, Field,  } from "formik";
import featurePropertieSchema from "@/src/util/validation/feature_propertie_schema";
import { use, useEffect, useState } from "react";
import {
  editProperetyApi,
  findSinglePropertyAPi,
} from "@/src/lib/api_service_client/agent_agencies_service/property_handler";
import { cityResType } from "@/src/type/components_type/all_admin_type";
import {
  formPropertyType,
  PropertyResType,
} from "@/src/type/api_type/common_type";
import { listCityApi } from "@/src/lib/api_service_client/admin_service/city_handler";
import Loader from "@/src/components/loader";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const EditFeaturedProperty = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params);
  
  const router = useRouter();

  const [allData, setAllData] = useState<PropertyResType | null>(null);

  const [allCity, setAllCity] = useState<cityResType[]>([]);

  const [showLoader, setLoader] = useState(false);

  const fetchAllCity = async () => {
    const resAllCity = await listCityApi();
    if (resAllCity.status) {
      setAllCity(resAllCity.data);
    }
  };

  const fetchPropertyDetails = async () => {
    const ress = await findSinglePropertyAPi(id);

    if (ress.status) {
      console.log("got ressss", ress);
      setAllData(ress.data);
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    fetchPropertyDetails();
    fetchAllCity();
  }, []);

  if (!allData || !allCity) {
    return (
      <>
        <Loader />
      </>
    ); // or any loading indicator you prefer
  }

  const initialValues = {
    name: allData?.name || "",
    price: allData?.price || "",
    room: allData?.room || "",
    city: allData?.city.id || "",
    bathroom: allData?.bathroom || "",
    sm: allData?.sm || "",
    imageUrl: allData?.imageUrl || "",
  };

  const handleSubmit = async (
    values_data: formPropertyType,
    
  ) => {
    setLoader(true);
    const edited = await editProperetyApi(values_data, id);
    setLoader(false);

    if (edited.status) {
      toast.success(edited.data);
      router.push("/featured");
    } else {
      toast.error(edited.data);
    }
  };

  const filteredCityList = allCity.filter(
    (city) => city.id !== allData.city.id
  );

  return (
    <div>
      {showLoader && <Loader />}
      <Formik
        initialValues={initialValues}
        validationSchema={featurePropertieSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <div className="max-w-lg  mx-auto p-6 mt-5 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-[24px] font-semibold text-center text-gray-800 mb-6">
                Edit Property Details
              </h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
                <div className="h-1">
                  {errors.name && touched.name ? (
                    <div className="text-red-500 text-xs mt-1 ">
                      {errors.name}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <Field
                  type="text"
                  name="price"
                  values={values.price}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
                />
                <div className="h-1">
                  {errors.price && touched.price ? (
                    <div className="text-red-500 text-xs mt-1 ">
                      {errors.price}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  city
                </label>
                <Field
                  as="select"
                  type="city"
                  name="city"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  {/* <option value='' disabled>{allData.city.cityName}</option> */}
                  <option value={allData.city.id}>
                    {allData.city.cityName}
                  </option>
                  {filteredCityList?.map((city, idx) => (
                    <option key={idx} value={city.id}>
                      {city.cityName}
                    </option>
                  ))}
                </Field>

                <div className="h-1">
                  {errors.city && touched.city ? (
                    <div className="text-red-500 text-xs mt-1 ">
                      {errors.city}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room
                </label>
                <Field
                  type="text"
                  name="room"
                  values={values.room}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
                />
                <div className="h-1">
                  {errors.room && touched.room ? (
                    <div className="text-red-500 text-xs mt-1 ">
                      {errors.room}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  sm
                </label>
                <Field
                  type="text"
                  name="sm"
                  values={values.sm}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
                />
                <div className="h-1">
                  {errors.sm && touched.sm ? (
                    <div className="text-red-500 text-xs mt-1 ">
                      {errors.sm}
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  bathroom
                </label>
                <Field
                  type="text"
                  name="bathroom"
                  values={values.bathroom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
                />
                <div className="h-1">
                  {errors.bathroom && touched.bathroom ? (
                    <div className="text-red-500 text-xs mt-1 ">
                      {errors.bathroom}
                    </div>
                  ) : null}
                </div>
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditFeaturedProperty;
