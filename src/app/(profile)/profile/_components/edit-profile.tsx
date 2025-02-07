"use client";

import Modal from "@/components/ui/modal";
import { EditProfileTypeEnum } from "@/enums/edit-profile-type.enum";
import { Dispatch, SetStateAction, useState } from "react";
import closeIcon from "@/assets/icons/icon_close.png";
import Image from "next/image";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { isValidPath } from "@/utils/path";
import { useProfileStore } from "@/zustand/profile-store";
import { updatePath, updateUsername } from "@/actions/profile";

export default function EditProfile({
  isModalOpen,
  setIsModalOpen,
  type,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  type: EditProfileTypeEnum;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newUsername, setNewUsername] = useState("");
  const [newPath, setNewPath] = useState("");
  const { profile, setProfile } = useProfileStore();
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    if (!profile) return;
    console.log("debug profile", profile);

    setLoading(true);
    setError(null);

    try {
      let newProfile;

      if (type === EditProfileTypeEnum.USERNAME) {
        const { success, error } = await updateUsername(newUsername);
        if (!success) {
          setError(error!);
          return;
        }

        newProfile = {
          ...profile,
          username: newUsername,
          updated_at: new Date().toISOString(),
        };
      } else if (type === EditProfileTypeEnum.PATH) {
        if (isValidPath(newPath) === false) {
          setError("경로를 제대로 입력해주세요!");
          return;
        }

        const { success, error } = await updatePath(newPath);
        if (!success) {
          setError(error!);
          return;
        }

        newProfile = {
          ...profile,
          path: newPath,
          updated_at: new Date().toISOString(),
        };
      }

      setProfile(newProfile as Profile);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <>
      <Modal open={isModalOpen} onClose={handleClose} className="rounded-lg">
        <div className="flex justify-end">
          <Image
            src={closeIcon}
            alt="close"
            className="w-8 h-8 p-1 rounded-md object-contain cursor-pointer hover:bg-gray-100 transition-color duration-300"
            onClick={handleClose}
          />
        </div>
        {type === EditProfileTypeEnum.USERNAME && (
          <div>
            <h2 className="title text-center mb-4">닉네임 변경</h2>
            <Input
              label="세로운 닉네임"
              type="text"
              id="new_username"
              value={newUsername}
              placeholder="세로운 닉네임을 입력해주세요"
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
            <Button
              onClick={handleSubmit}
              className="color"
              disabled={newUsername === ""}
            >
              확인
            </Button>
          </div>
        )}
        {type === EditProfileTypeEnum.PATH && (
          <div>
            <h2 className="title text-center mb-4">내 링크 변경</h2>
            <Input
              label="세로운 링크"
              type="text"
              id="new_path"
              value={newPath}
              placeholder="링크는 중복이 불가능합니다."
              onChange={(e) => setNewPath(e.target.value)}
              required
            />
            <p className="mt-2 text-red-500 supplementary-info">{error}</p>
            <Button
              onClick={handleSubmit}
              className="color"
              disabled={newPath === ""}
            >
              확인
            </Button>
          </div>
        )}
      </Modal>
      {loading && <Loader />}
    </>
  );
}
