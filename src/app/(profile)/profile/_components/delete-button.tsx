"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";
import { useProfileStore } from "@/zustand/profile-store";
import { deleteAccount } from "@/actions/auth";

export default function DeleteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setProfile } = useProfileStore();
  const router = useRouter();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    try {
      await deleteAccount();
      setIsModalOpen(false);
      setProfile(null);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        onClick={openModal}
        className="bg-red-500 text-white py-3 rounded-md shadow-md hover:bg-red-400 w-full"
      >
        회원 탈퇴
      </Button>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        className="rounded-lg mx-auto"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            정말 탈퇴하시겠습니까?
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            계정을 탈퇴하면 모든 데이터가 삭제되며 복구할 수 없습니다.<br/>
            그래도 진행하시겠습니까?
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              className="bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors my-0"
              onClick={handleDelete}
            >
              탈퇴
            </Button>
            <Button
              className="bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors my-0"
              onClick={closeModal}
            >
              취소
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
