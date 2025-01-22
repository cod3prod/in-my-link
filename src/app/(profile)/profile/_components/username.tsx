"use client";

import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditProfile from "./edit-profile";
import { EditProfileTypeEnum } from "@/enums/edit-profile-type.enum";

export default function Username({ username }: { username: string | null }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          {username || "닉네임을 설정해주세요"}
        </h2>
        <div className="ml-2 cursor-pointer text-blue-500" onClick={()=>setIsModalOpen(true)}>
          <FaEdit />
        </div>
      </div>
      <EditProfile
        type={EditProfileTypeEnum.USERNAME}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}
