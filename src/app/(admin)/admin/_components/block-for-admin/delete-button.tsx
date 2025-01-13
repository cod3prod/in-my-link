import { FaTrashAlt } from "react-icons/fa";

export default function DeleteButton() {
  return (
    <button className="absolute bottom-2 right-2">
      <FaTrashAlt className="cursor-pointer text-xl text-gray-500 hover:text-gray-700" />
    </button>
  );
}
