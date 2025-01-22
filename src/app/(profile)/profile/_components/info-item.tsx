"use client";

import { FaEdit } from "react-icons/fa";
import EditProfile from "./edit-profile";
import { EditProfileTypeEnum } from "@/enums/edit-profile-type.enum";
import { useState } from "react";

export default function InfoItem({
  label,
  value,
  placeholder,
  attribute,
}: {
  label: string;
  value: string | null;
  placeholder?: string;
  attribute?: EditProfileTypeEnum;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center text-gray-700">
      <p className="font-semibold">{`${label}:`}</p>
      <p className="ml-2 text-gray-600 truncate">
        {value ? value : placeholder}
      </p>
      {attribute && (
        <>
          <div
            className="ml-2 cursor-pointer text-blue-500"
            onClick={() => setIsModalOpen(true)}
          >
            <FaEdit />
          </div>
          <EditProfile
            type={attribute}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </>
      )}
    </div>
  );
}
