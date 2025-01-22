"use client";

import { useState } from "react";
import { supabaseService } from "@/libs/supabase-client";
import { useAuthStore } from "@/zustand/auth-store";
import { useRouter } from "next/navigation";
import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";

export default function DeleteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { session, setSession } = useAuthStore();
  const router = useRouter();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleDelete = async () => {
    if (!session) return;
    const { error } = await supabaseService.auth.admin.deleteUser(
      session.user.id
    );
    if (error) return console.error(error);
    setIsModalOpen(false);
    setSession(null);
    router.push("/");
  };

  return (
    <>
      <Button
        onClick={openModal}
        className="bg-red-500 text-white py-3 rounded-md shadow-md hover:bg-red-400 w-full"
      >
        회원 탈퇴
      </Button>

      <Modal open={isModalOpen} onClose={closeModal} className="rounded-lg">
        <h2 className="text-xl font-semibold mb-4">정말 탈퇴하겠습니까?</h2>
        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            onClick={handleDelete}
          >
            예
          </button>
          <button
            className="bg-gray-300 text-text-444 py-2 px-4 rounded-md hover:bg-gray-400"
            onClick={closeModal}
          >
            아니요
          </button>
        </div>
      </Modal>
    </>
  );
}