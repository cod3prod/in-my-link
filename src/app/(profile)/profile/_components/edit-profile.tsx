"use client";

import Modal from "@/components/ui/modal";
import { EditProfileTypeEnum } from "@/enums/edit-profile-type.enum";
import { Dispatch, SetStateAction, useState } from "react";
import closeIcon from "@/assets/icons/icon_close.png";
import Image from "next/image";
import { supabase } from "@/libs/supabase-client";
import { useAuthStore } from "@/zustand/auth-store";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { isValidPath } from "@/utils/path";
import { useProfileStore } from "@/zustand/profile-store";

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
  const { session } = useAuthStore();
  const { profile, setProfile } = useProfileStore();
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    if (!session || !profile ) return;

    setLoading(true);
    setError(null);

    if (type === EditProfileTypeEnum.USERNAME) {
      try {
        await supabase
          .from("profiles")
          .update({
            username: newUsername,
            updated_at: new Date().toISOString(),
          })
          .eq("id", profile.id);
        const newProfile = {
          ...profile,
          username: newUsername,
          updated_at: new Date().toISOString(),
        };
        setProfile(newProfile);
      } catch (error) {
        console.error(error);
      }
    } else if (type === EditProfileTypeEnum.PATH) {
      try {
        // 경로 유효성 검사
        if (isValidPath(newPath) === false) {
          setError("경로를 제대로 입력해주세요!");
          return;
        }

        const { data: existingLinks, error: checkError } = await supabase
          .from("profiles")
          .select("id")
          .eq("path", newPath);

        if (checkError) {
          console.error("중복 체크 중 오류 발생:", checkError);
          setError("중복 체크 중 문제가 발생했습니다. 다시 시도해주세요.");
          return;
        }

        if (existingLinks && existingLinks.length > 0) {
          setError("이미 사용 중인 링크입니다.");
          return;
        }

        const { error: updateError } = await supabase
          .from("profiles")
          .update({ path: newPath, updated_at: new Date() })
          .eq("id", profile.id);

        if (updateError) {
          console.error("업데이트 중 오류 발생:", updateError);
          setError("링크 업데이트 중 문제가 발생했습니다.");
          return;
        }

        const newProfile = {
          ...profile,
          path: newPath,
          updated_at: new Date().toISOString(),
        };

        setProfile(newProfile);
      } catch (error) {
        console.error(error);
      }
    }

    setLoading(false);
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        className="relative rounded-lg "
      >
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
        {type === EditProfileTypeEnum.IMAGE && <div>Image</div>}
      </Modal>
      {loading && <Loader />}
    </>
  );
}
