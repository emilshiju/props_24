"use client";
import { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { ProfileData } from "@/src/type/validation_type/profilePage_type";
import profileSchema from "@/src/util/validation/profile_scehma";
import { createProfileApi } from "@/src/lib/api_service_client/user_service/profile_handler";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";
import {
  cityResType,
  specialisation_Res_Type,
} from "@/src/type/components_type/all_admin_type";
import { listCityApi } from "@/src/lib/api_service_client/admin_service/city_handler";
import { listSpecializationApi } from "@/src/lib/api_service_client/admin_service/specialization_handler";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // Or any other theme of your choice
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { X } from "lucide-react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/src/service/firebase/firebase_init";
import Loader from "@/src/components/loader";

const CreateProfile = () => {
  const router = useRouter();

  const [allCity, setAllCity] = useState<cityResType[]>([]);

  const [showFileUpload, setFileUpload] = useState(false);
  const [showLoader, setLoader] = useState(false);
  const [allData, setData] = useState<ProfileData | null>(null);

  const [allSpecialization, setSpecialization] = useState<
    specialisation_Res_Type[]
  >([]);

  const fetchAllCity = async () => {
    const resAllCity = await listCityApi();
    if (resAllCity.status) {
      setAllCity(resAllCity.data);
    }
  };

  const fetchAllSpecialization = async () => {
    const resAllSpecialization = await listSpecializationApi();
    if (resAllSpecialization.status) {
      setSpecialization(resAllSpecialization.data);
    }
  };

  useEffect(() => {
    fetchAllCity();
    fetchAllSpecialization();
  }, []);

  const initialValues: ProfileData = {
    businessName: "",
    phone: "",
    licenseNumber: "",
    bio: "",
    specialization: "",
    city: "",
  };

  const handleSubmit = async (
    values_data: ProfileData,
    formikHelpers: FormikHelpers<ProfileData>
  ) => {
    console.log("create profile submit");
    console.log(values_data);
    setData(values_data);
    setFileUpload(true);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string>("");

  const handleChooseClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];

      if (!validImageTypes.includes(selectedFile.type)) {
        toast.error("Please select a valid image file (jpg, png, gif, webp)");
        return;
      }

      // Create a new image object to check dimensions
      const img = new Image();
      img.src = URL.createObjectURL(selectedFile);

      img.onload = () => {
        // Check if image dimensions match requirements
        if (img.width !== 215 || img.height !== 215) {
          toast.error("Image dimensions must be 215 x 215 pixels");
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
    try {
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
            setLoader(false);
          }

          if (allData) {
            const ress = await createProfileApi(allData, downloadURL);
            setLoader(false);

            if (ress.status) {
              router.push("/verification");
            } else {
              const errorMessage = ress.message;
              toast.error(errorMessage);
            }
          } else {
            toast.error("error occured retry ");
          }
        } catch (error) {
          console.log("error occurring in upload to firebase", error);
          handleRemove();
          toast.error("error occurred");
        }
      });
    } catch (error) {
      console.log("error occrung in upload to firebase", error);
      handleRemove();
      toast.error("error occured");
      setLoader(false);
    }
  };

  return (
    <>
      {showLoader && <Loader />}

      {!showFileUpload ? (
        <Formik
          initialValues={initialValues}
          validationSchema={profileSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, errors, touched }) => (
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Profile Information
                  </h2>

                  <Form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Business Name
                      </label>
                      <Field
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={values.businessName}
                        onChange={handleChange}
                        className="mt-1  block w-full text-black rounded-md focus:outline-none border-gray-300 shadow-sm  sm:text-sm h-8"
                      />
                      <div className="h-1">
                        {errors.businessName && touched.businessName ? (
                          <div className="text-red-500 text-xs mt-1 ">
                            {errors.businessName}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:outline-none h-8 sm:text-sm"
                      />
                      <div className="h-1">
                        {errors.phone && touched.phone ? (
                          <div className="text-red-500 text-xs mt-1 ">
                            {errors.phone}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="licenseNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        License Number
                      </label>
                      <Field
                        type="text"
                        id="licenseNumber"
                        name="licenseNumber"
                        value={values.licenseNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:outline-none h-8  sm:text-sm"
                      />
                      <div className="h-1">
                        {errors.licenseNumber && touched.licenseNumber ? (
                          <div className="text-red-500 text-xs mt-1 ">
                            {errors.licenseNumber}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <Field
                        as="select"
                        id="city"
                        name="city"
                        // value={values.specialization}
                        onChange={handleChange}
                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:outline-none h-8  sm:text-sm"
                      >
                        <option value="" disabled hidden></option>
                        {/* <option value="agent">I am an Agent</option>
               <option value="agencies">I represent an Agency</option> */}

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

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Specialization
                      </label>
                      <Field
                        as="select"
                        id="specialization"
                        name="specialization"
                        // value={values.specialization}
                        onChange={handleChange}
                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:outline-none h-8  sm:text-sm"
                      >
                        <option value="" disabled hidden></option>
                        {/* <option value="agent">I am an Agent</option>
               <option value="agencies">I represent an Agency</option> */}

                        {allSpecialization?.map((spec, idx) => (
                          <option key={idx} value={spec.id}>
                            {spec.title}
                          </option>
                        ))}
                      </Field>
                      <div className="h-1">
                        {errors.specialization && touched.specialization ? (
                          <div className="text-red-500 text-xs mt-1 ">
                            {errors.specialization}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="bio"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Bio
                      </label>
                      <Field
                        id="bio"
                        name="bio"
                        rows={4}
                        value={values.bio}
                        onChange={handleChange}
                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:outline-none h-8  sm:text-sm"
                      />
                      <div className="h-1">
                        {errors.bio && touched.bio ? (
                          <div className="text-red-500 text-xs mt-1 ">
                            {errors.bio}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save Profile
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          )}
        </Formik>
      ) : (
        <div>
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
                  <p className="text-lg">
                    {" "}
                    Image dimensions must be 215 x 215 pixels
                  </p>
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
        </div>
      )}
    </>
  );
};

export default CreateProfile;
