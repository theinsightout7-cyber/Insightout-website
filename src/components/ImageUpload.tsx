import { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import {RiDeleteBin6Line} from "react-icons/ri";

export default function ImageUpload() {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [deleteImage,setDeleteImage] = useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files && files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="w-full mx-auto p-4 bg-white rounded-xl shadow-md">
      {!image && (
        <label className="block w-full cursor-pointer">
          <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-2 hover:border-blue-400 transition">
            <span className="text-gray-500 flex flex-col items-center justify-center">
              <IoCloudUploadOutline className="w-8 h-4 mb-2 text-2xl" />
              Click or drag to upload an image
            </span>
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      )}

      {image && typeof image === 'string' && (
        <div className="mt-4 relative  w-full flex flex-col items-center gap-4">
          <img
            src={image}
            alt="Uploaded"
            className="w-full object-cover object-center rounded-md shadow h-full"
          onMouseEnter={()=>setDeleteImage(true)}
         />
         {deleteImage && <button
            type="button"
            onClick={handleRemoveImage}
            className={`mt-2   transition absolute top-0 right-0 m-4 `}
          >
            <RiDeleteBin6Line className="w-5 h-5 text-[var(--primary-blue)] " />
          </button>} 
        </div>
      )}
    </div>
  );
}