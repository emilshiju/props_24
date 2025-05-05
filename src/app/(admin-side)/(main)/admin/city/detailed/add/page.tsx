"use client"

import React, { useState , useRef, ChangeEvent, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import detailedCityValidationSchema from '@/src/util/validation/cityDetailScehma';
import ImageUploadWithPreview from './he';
import { cityResType, detailedCityType } from '@/src/type/components_type/all_admin_type';
import { ref, uploadBytes ,getDownloadURL } from "firebase/storage";
import { storage } from '@/src/service/firebase/firebase_init';
import { cityDetailsApi, listCityApi } from '@/src/lib/api_service_client/admin_service/city_handler';


interface DetailItem {
  averagePrice: string;
  popularity: string;
  availableProperties: string;
  description: string;
}

interface AboutItem {
  content: string;
}

interface AreaItem {
  heading: string;
  content: string;
}

interface TypeItem {
  heading: string;
  content: string;
  price: number;
}

const MultiSectionForm: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('city');
  const [details, setDetails] = useState<DetailItem>({
    averagePrice: '',
    popularity: '',
    availableProperties: '',
    description: ''
  });
  const [about, setAbout] = useState<AboutItem>({
    content: ''
  });
  const [areas, setAreas] = useState<AreaItem[]>([
    { heading: '', content: '' },
    { heading: '', content: '' },
    { heading: '', content: '' },
    { heading: '', content: '' },
    { heading: '', content: '' }
  ]);
  const [types, setTypes] = useState<TypeItem[]>([
    { heading: '', content: '', price: 0 },
    { heading: '', content: '', price: 0 },
    { heading: '', content: '', price: 0 },
    { heading: '', content: '', price: 0 },
    { heading: '', content: '', price: 0 }
  ]);


  const [allCity,setAllCity]=useState<cityResType[]>([])

  const fetchAllCity=async()=>{

    const resAllCity=await listCityApi()
    if(resAllCity.status){
      setAllCity(resAllCity.data)
    }
  }

  useEffect(()=>{
    fetchAllCity()
  },[])

 
 


  const getInitialValues = (): detailedCityType => ({
    city:'',
    details: {
      averagePrice: '',
      popularity: '',
      availableProperties: '',
      description: ''
    },
    about: {
      content: ''
    },
    image: null,
    areas: Array(5).fill({ heading: '', content: '' }),
    types: Array(4).fill({ heading: '', content: '', price: '' })
  });
  
  const initialValues = getInitialValues();


    const handleSubmit=async(values:detailedCityType,formikHelpers:FormikHelpers<detailedCityType>)=>{




      try{
   
              formikHelpers.resetForm({
                    values: getInitialValues()
              });
              

      
              let imageUrl: string | null = null;
        
                // Handle image if it's a file (upload to Firebase)
              if (values.image && typeof values.image !== 'string') {
                    const storageRef = ref(storage, values.image.name);
                  try {
                      const snapshot = await uploadBytes(storageRef, values.image);
                      const downloadURL = await getDownloadURL(snapshot.ref);
                      imageUrl = downloadURL;
                  } catch (error) {
                      console.error('Error occurred during file upload', error);
                      alert("error")
                        return; // Handle the error and prevent submission
                    }
              } else {
                    imageUrl = values.image as string; // URL case
              }



            const updatedValues = {
                  ...values,
                  image: imageUrl,
              };
            setPreview(null);

            const res=await cityDetailsApi(updatedValues)
 
          if(res.status){
              alert("sucess")
          }else{
              alert("error")
          }


    }catch(error){

    }

    
    }





      const [isDragging, setIsDragging] = useState(false);
      const fileInputRef = useRef<HTMLInputElement>(null);
    
     
    
      
    
      const triggerFileInput = () => {
        fileInputRef.current?.click();
      };
    
      
      const [preview, setPreview] = useState<string | null>(null);
    




  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Property Information Form</h1>
      
      <div className="flex mb-6 border-b overflow-x-auto pb-2">
      <button
          type="button"
          onClick={() => setActiveSection('city')}
          className={`px-4 py-2 font-medium ${activeSection === 'city' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
        >
          City
        </button>
        <button
          type="button"
          onClick={() => setActiveSection('details')}
          className={`px-4 py-2 font-medium ${activeSection === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() => setActiveSection('about')}
          className={`px-4 py-2 font-medium ${activeSection === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
        >
          About
        </button>
        <button
          type="button"
          onClick={() => setActiveSection('area')}
          className={`px-4 py-2 font-medium ${activeSection === 'area' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
        >
          Area
        </button>
        <button
          type="button"
          onClick={() => setActiveSection('image')}
          className={`px-4 py-2 font-medium ${activeSection === 'image' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
        >
          Image
        </button>
        <button
          type="button"
          onClick={() => setActiveSection('type')}
          className={`px-4 py-2 font-medium ${activeSection === 'type' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
        >
          Type
        </button>
        
      </div>

 <Formik 
      initialValues={initialValues}
      validationSchema={detailedCityValidationSchema}
      onSubmit={handleSubmit}
      >
         {({ values, handleChange, errors, touched ,setFieldValue }) => (
      <Form >
        {activeSection === 'details' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Property Details</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Average Price</label>
              <Field
                type="text"
                name="details.averagePrice"
                value={values.details.averagePrice}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter average price"
              />
              <div className="h-1">
            {errors.details?.averagePrice && touched.details?.averagePrice ? <div className="text-red-500 text-xs mt-1 ">{errors.details.averagePrice}</div> : null}
            </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Popularity</label>
              <Field
                type="text"
                name="details.popularity"
                value={values.details.popularity}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter popularity rating"
              />
              <div className="h-1">
            {errors.details?.popularity && touched.details?.popularity ? <div className="text-red-500 text-xs mt-1 ">{errors.details.popularity}</div> : null}
            </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Available Properties</label>
              <Field
                type="text"
                name="details.availableProperties"
                value={values.details.availableProperties}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number of available properties"
              />
              <div className="h-1">
            {errors.details?.availableProperties && touched.details?.availableProperties ? <div className="text-red-500 text-xs mt-1 ">{errors.details.availableProperties}</div> : null}
            </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <Field
                name="details.description"
                component="textarea"
                value={values.details.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter property description"
              />
              <div className="h-1">
            {errors.details?.description && touched.details?.description ? <div className="text-red-500 text-xs mt-1 ">{errors.details.description}</div> : null}
            </div>
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">About the Property</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">About Content</label>
              <Field
                value={values.about.content}
                onChange={handleChange}
                component="textarea"
                rows={8}
                name="about.content"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter all about the property"
              />
              <div className="h-1">
            {errors.about?.content && touched.about?.content ? <div className="text-red-500 text-xs mt-1 ">{errors.about.content}</div> : null}
            </div>
            </div>
          </div>
        )}

        {activeSection === 'area' && (

    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700">Area Details</h2>
      {values.areas.map((area, index) => (
       
        <div key={index} className="border p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Heading {index + 1}</label>
              <Field
                type="text"
                name={`areas[${index}].heading`}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter heading for area ${index + 1}`}
              />
              <ErrorMessage 
                name={`areas[${index}].heading`} 
                component="div" 
                className="text-red-500 text-xs mt-1" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content {index + 1}</label>
              <Field
                as="textarea"
                name={`areas[${index}].content`}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter content for area ${index + 1}`}
              />
              <ErrorMessage 
                name={`areas[${index}].content`} 
                component="div" 
                className="text-red-500 text-xs mt-1" 
              />
            </div>
          </div>
        </div>
      ))}
    </div>
       


        )}




{activeSection==='image'&&(<div>

  <div className="max-w-md mx-auto p-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
       
        onClick={triggerFileInput}
      >
        <input
          type="file"
          ref={fileInputRef}
          // onChange={handleImageChange}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setFieldValue('image', file);
              setPreview(URL.createObjectURL(file));
            }
          }}
          accept="image/*"
          className="hidden"
        />
        
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="max-h-64 mx-auto rounded-md mb-4"
            />
            <button
              type="button"
             
              onClick={(e) => {
                e.stopPropagation();
                if (fileInputRef.current) {
                  fileInputRef.current.value = '';
                }
                setPreview(null);
                setFieldValue('image', null);
              }}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
            >
              ×
            </button>
          </div>
        ) : (
          <>
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-medium text-blue-600 hover:text-blue-500">
                Click to upload
              </span>{' '}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </>
        )}
        
      </div>

      <ErrorMessage 
            name="image" 
            component="div" 
            className="text-red-500 text-sm mt-2 text-center" 
          />
         

      {/* {preview && (
        <button
          type="button"
          onClick={removeImage}
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
        >
          Remove Image
        </button>
      )} */}
      
    </div>
</div>)}





        {activeSection === 'type' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700">Property Types</h2>
            {values.types.map((type, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Heading {index + 1}</label>
                    <Field
                      type="text"
                      name={`types[${index}].heading`}
                    //   value={type.heading}
                    //   onChange={(e) => handleTypeChange(index, 'heading', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Enter heading for type ${index + 1}`}
                    />
                    <ErrorMessage 
                name={`types[${index}].heading`} 
                component="div" 
                className="text-red-500 text-xs mt-1" 
              />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content {index + 1}</label>
                    <Field
                     type="text"
                     name={`types[${index}].content`}
                    //   value={type.content}
                    //   onChange={(e) => handleTypeChange(index, 'content', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Enter content for type ${index + 1}`}
                    />
                    <ErrorMessage 
                name={`types[${index}].content`} 
                component="div" 
                className="text-red-500 text-xs mt-1" 
              />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price {index + 1}</label>
                    <Field
                      type="text"
                      name={`types[${index}].price`}
                    //   value={type.price}
                    //   onChange={(e) => handleTypeChange(index, 'price', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Enter price for type ${index + 1}`}
                    />
                    <ErrorMessage 
                name={`types[${index}].price`} 
                component="div" 
                className="text-red-500 text-xs mt-1" 
              />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}


      




{activeSection === 'city' && (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-700">Select City</h2>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
      <Field
        as="select"
        id="city"
        name="city"
        // value={values.city}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        
        <option value="" disabled hidden>select an city</option>

        {allCity?.map((city, idx) => (
    <option key={idx} value={city.id}>
      {city.cityName}
    </option>
  ))}

      </Field>
     
        <ErrorMessage 
                name='city' 
                component="div" 
                className="text-red-500 text-xs mt-1" 
              />
    </div>
  </div>
)}




        


        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => {
              const sections = ['city','details', 'about', 'area', 'type'];
              const currentIndex = sections.indexOf(activeSection);
              if (currentIndex > 0) {
                setActiveSection(sections[currentIndex - 1]);
              }
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Previous
          </button>
          
          {activeSection === 'type' ? (
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                const sections = ['city','details', 'about', 'area','image', 'type'];
                const currentIndex = sections.indexOf(activeSection);
                if (currentIndex < sections.length - 1) {
                  setActiveSection(sections[currentIndex + 1]);
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          )}
        </div>
      </Form>)}
      </Formik>
    </div>
  );
};

export default MultiSectionForm;


// const AddDetailedCity=()=>{

//     return (

//         <div>

//             add detailed city

//         </div>
//     )
// }

// export default AddDetailedCity