import { CiImageOff } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa";

export default function PlacehorderForLink({
    isLoading,
    img_url,
  }: {
    isLoading: boolean;  
    img_url?: string;
  }) {
  return (
    <>
      {!img_url && (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 absolute top-0 left-0">
          <CiImageOff className="text-gray-500 text-7xl" />
          {/* <p className="text-sm text-gray-600 mt-2">URL이 존재하지 않습니다</p> */}
        </div>        
      )}
      {img_url && isLoading && (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 absolute top-0 left-0">
          <FaSpinner className="text-gray-500 animate-spin text-4xl" />
        </div>
      )}
    </>
  )
}  

