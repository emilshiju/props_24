"use client";
import {
  addCityApi,
  listCityApi,
} from "@/src/lib/api_service_client/admin_service/city_handler";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import featurePropertieSchema from "@/src/util/validation/feature_propertie_schema";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { cityResType } from "@/src/type/components_type/all_admin_type";
import { X } from "lucide-react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-hot-toast";
import { storage } from "@/src/service/firebase/firebase_init";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Or any other theme of your choice
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PropertyType } from "@/src/type/validation_type/propertyType";
import { addPropertyApi } from "@/src/lib/api_service_client/agent_agencies_service/property_handler";
import Loader from "@/src/components/loader";

const AddFeaturedProperties = () => {
  const [showPropertyImage, setPropertieImage] = useState(false);

  const [showLoader, setLoader] = useState(false);

  const [allCity, setAllCity] = useState<cityResType[]>([]);

  const [allDataProperty, setAllDataProperty] = useState<PropertyType>();

  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewURL, setPreviewURL] = useState<string>("");

  const router = useRouter();

  const fetchAllCity = async () => {
    const resAllCity = await listCityApi();
    if (resAllCity.status) {
      setAllCity(resAllCity.data);
    }
  };

  useEffect(() => {
    fetchAllCity();
  }, []);

  const initialValues = {
    name: "",
    price: "",
    room: "",
    city: "",
    bathroom: "",
    sm: "",
  };

  const handleSubmit = async (
    values_data: PropertyType,
    formikHelpers: FormikHelpers<PropertyType>
  ) => {
    setAllDataProperty(values_data);
    formikHelpers.resetForm();
    setPropertieImage(true);
  };

  const handleChooseClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const validImageTypes = ["image/jpeg", "image/png"];

      if (!validImageTypes.includes(selectedFile.type)) {
        toast.error("Please select a valid image file (jpg, png, )");
        return;
      }

      // Create a new image object to check dimensions
      const img = new Image();
      img.src = URL.createObjectURL(selectedFile);

      img.onload = () => {
        // Check if image dimensions match requirements
        if (img.width !== 600 || img.height !== 400) {
          toast.error("Image dimensions must be 600x400 pixels");
          return;
        }

        // If dimensions are correct, proceed with setting the file and preview
        setFile(selectedFile);
        setPreviewURL(URL.createObjectURL(selectedFile));
      };

      img.onerror = () => {
        toast.error("Error loading image");
      };
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreviewURL("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("error occured");
      return;
    }

    setLoader(true);

    const storageRef = ref(storage, file.name);

    uploadBytes(storageRef, file).then(async (snapshot) => {
      console.log(snapshot);
      console.log("Uploaded a blob or file!");

      try {
        const downloadURL = await getDownloadURL(snapshot.ref);

        if (!downloadURL) {
          handleRemove();
          toast.error("error occurred try again");
        }

        console.log(downloadURL);

        if (allDataProperty) {
          const response = await addPropertyApi(allDataProperty, downloadURL);
          setLoader(false);
          handleRemove();
          setPropertieImage(false);

          if (response.status) {
            toast.success(response.data);
          } else {
            toast.error(response.data);
          }
        }
      } catch (error) {
        console.log("error occurring in upload to firebase", error);
        handleRemove();
        setLoader(false);
        toast.error("error occurred");
      }
    });
  };

  return (
    <div>
      {showLoader && <Loader />}

      {!showPropertyImage && (
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={featurePropertieSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, errors, touched }) => (
              <Form>
                <div className="max-w-lg  mx-auto p-6 mt-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-[24px] font-semibold text-center text-gray-800 mb-6">
                    Add Propertie Details
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
                      <option value="" disabled hidden></option>
                      {allCity?.map((city, idx) => (
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
      )}

      {showPropertyImage && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-[510px] border rounded-lg p-4 bg-white shadow-md">
            {/* Top Buttons */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {/* Choose Button */}
                {!file && (
                  <button
                    onClick={handleChooseClick}
                    className="border-2 border-blue-400 text-blue-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-50"
                  >
                    <i className="pi pi-images text-xl" />
                  </button>
                )}

                {/* Upload Button */}
                {file && (
                  <button
                    onClick={handleUpload}
                    className="border-2 border-green-400 text-green-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-50"
                  >
                    <i className="pi pi-cloud-upload text-xl" />
                  </button>
                )}

                {/* Cancel Button */}
                {/* <button className="border-2 border-red-400 text-red-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-50">
    <i className="pi pi-times text-xl" />
  </button> */}
              </div>
            </div>

            {/* Drag and Drop Area */}
            {file ? (
              <div className="flex items-center justify-between border rounded-md p-4 shadow-sm bg-white">
                <div className="flex items-center space-x-4">
                  <img
                    src={previewURL}
                    alt="Preview"
                    className="w-[100px] h-[100px]  object-cover rounded-sm"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800">
                      {file.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleRemove}
                    className="w-8 h-8 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-50"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={handleChooseClick}
                className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center h-48 text-gray-400"
              >
                <i className="pi pi-image text-4xl mb-2" />
                <p className="text-lg">Drag and Drop Image Here</p>
                <p className="text-lg">Image dimensions must be 600 x 400</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFeaturedProperties;
