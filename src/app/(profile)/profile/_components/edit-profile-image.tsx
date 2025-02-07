"use client";

import Modal from "@/components/ui/modal";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import closeIcon from "@/assets/icons/icon_close.png";
import profileImage from "@/assets/icons/icon_profile.png";
import Image from "next/image";
import Button from "@/components/ui/button";
import { useProfileStore } from "@/zustand/profile-store";
import Loader from "@/components/ui/loader";
import { supabase } from "@/libs/supabase/client";

export default function EditProfileImage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { profile, setProfile } = useProfileStore();


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("프로필 사진은 5MB 이하로 업로드해 주세요.");
        return;
      }

      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("JPEG, PNG, WebP 형식의 이미지만 업로드 가능합니다.");
        return;
      }

      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    const { data: { session }} = await supabase.auth.getSession();
    if (!selectedFile) return;
    if (!profile) return;
    if (!session?.access_token) return;

    setLoading(true);

    const newFormData = new FormData();
    newFormData.append("image", selectedFile);
    newFormData.append("public_id", profile?.public_id || "");
    // console.log("public_id", profile?.public_id);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
        body: newFormData,
      });

      setLoading(false);

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Error: ${errorData.error || "Unknown error"}`);
        return;
      }

      const data: { profile_img: string; public_id: string } =
        await response.json();
      // console.log("profile", profile);
      // console.log("data", data);
      setIsModalOpen(false);
      setProfile({
        ...profile,
        profile_img: data.profile_img,
        public_id: data.public_id,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      setLoading(false);
    }
  };

  const profileImageSrc = profile?.profile_img || profileImage;

  return (
    <>
      <div
        className="absolute bottom-0 right-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <FaEdit />
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="rounded-lg"
      >
        <div className="flex justify-end">
          <Image
            src={closeIcon}
            alt="close"
            className="w-8 h-8 p-1 rounded-md object-contain cursor-pointer hover:bg-gray-100 transition-color duration-300"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-center mb-6">
            프로필 이미지 변경
          </h2>
          <div className="relative flex flex-col items-center space-y-4">
            <Image
              src={previewUrl || profileImageSrc}
              alt="Profile Image Preview"
              width={150}
              height={150}
              className="w-32 h-32 rounded-full shadow-md object-cover"
            />

            <label className="button gray w-fit px-4">
              <span>이미지 선택</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            <Button
              onClick={handleSubmit}
              className="color"
              disabled={!selectedFile}
            >
              확인
            </Button>
          </div>
        </div>
      </Modal>
      {loading && <Loader />}
    </>
  );
}
