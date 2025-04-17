"use client"
import { useRef,useState } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Or any other theme of your choice
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { X } from "lucide-react";
import { ref, uploadBytes ,getDownloadURL } from "firebase/storage";
import { storage } from '@/src/service/firebase/firebase_init';
import { toast } from 'react-hot-toast';
import {  uploadProfileImageAPi } from '@/src/lib/api_service_client/user_service/profile_handler';

const  ImageUploader=()=>{


    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string>("");

  
    
    const handleChooseClick = ():void => {
        
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
        setPreviewURL(URL.createObjectURL(selectedFile));
      }
    };


    const handleRemove = () => {
      setFile(null);
      setPreviewURL("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };




  const handleUpload=async()=>{


    try{


      if (!file) {
        toast.error("error occured")
        return;
      }

      const storageRef = ref(storage,file.name);

      uploadBytes(storageRef, file).then(async(snapshot) => {
        console.log(snapshot)
        console.log('Uploaded a blob or file!');



        try {

          const downloadURL = await getDownloadURL(snapshot.ref);

          if (!downloadURL) {
            handleRemove();
            toast.error("error occurred try again");
          }

          const ressAPI = await uploadProfileImageAPi(downloadURL);
  
          if (!ressAPI.status) {
            handleRemove();
            toast.error("error occurred try again");
          }

          





        } catch (error) {
          console.log("error occurring in upload to firebase", error);
          handleRemove();
          toast.error("error occurred");
        }

        
        // getDownloadURL(snapshot.ref).then((downloadURL) => {

        //   try{

        //     const ress =await uploadProfileImageAPi(downloadURL)

        //     if(!ress){
        //       alert("noo")
        //     }

            

        //   }catch(error){
        //     console.log("error occrung in upload to firebase",error)
        //     handleRemove()
        //     toast.error("error occured")
        //   }


        // })

    

      });

    }catch(error){
      console.log("error occrung in upload to firebase",error)
      handleRemove()
      toast.error("error occured")
      
    }

    }



    return (

      

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[510px] border rounded-lg p-4 bg-white shadow-md">
          
          {/* Top Buttons */}
          <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
  {/* Choose Button */}
  <button onClick={handleChooseClick} className="border-2 border-blue-400 text-blue-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-50">
    <i className="pi pi-images text-xl" />
  </button>

  {/* Upload Button */}
  {file&&<button  onClick={handleUpload} className="border-2 border-green-400 text-green-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-50">
    <i className="pi pi-cloud-upload text-xl" />
  </button>}

  {/* Cancel Button */}
  {/* <button className="border-2 border-red-400 text-red-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-50">
    <i className="pi pi-times text-xl" />
  </button> */}
</div>

    
           
          </div>
          
    
          {/* Drag and Drop Area */}
          {file? <div className="flex items-center justify-between border rounded-md p-4 shadow-sm bg-white">
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
          :<div onClick={handleChooseClick} className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center h-48 text-gray-400">
            <i className="pi pi-image text-4xl mb-2" />
            <p className="text-lg">Drag and Drop Image Here</p>
            <input   ref={fileInputRef} type="file" onChange={handleFileChange} style={{ display: 'none' }} />
          </div>}


        </div>
      </div>
    );
  }

  export default ImageUploader
  