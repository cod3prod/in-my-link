"use client";

import Background from "@/components/background";
import ProfileImage from "./profile-image";
import Username from "./username";
import InfoItem from "./info-item";
import { formatDateTime } from "@/utils/date";
import { EditProfileTypeEnum } from "@/enums/edit-profile-type.enum";
import DeleteButton from "./delete-button";
import { useProfileStore } from "@/zustand/profile-store";
import { useEffect } from "react";

export default function ProfileClient({
  email,
  initialProfile,
}: {
  email: string;
  initialProfile: Profile;
}) {
  const { profile, setProfile } = useProfileStore();

  useEffect(() => {
    setProfile(initialProfile);
  }, [initialProfile, setProfile]);

  if(!profile) return null;

  return (
    <section className="w-full px-8 pt-10 border-1 border-gray-200 rounded-md shadow-lg bg-background">
      <Background />
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-5">
        <div className="sm:col-span-2 flex flex-col items-center gap-1">
          <ProfileImage src={profile.profile_img || null} />
          <Username username={profile.username || null} />
        </div>

        <div className="sm:col-span-3 flex flex-col justify-start space-y-4 text-sm sm:text-base">
          <InfoItem label="이메일" value={email!} />
          <InfoItem
            label="가입일"
            value={formatDateTime(profile.created_at)}
          />
          <InfoItem
            label="수정일"
            value={formatDateTime(profile.updated_at)}
          />
          <InfoItem
            label="링크"
            value={profile.path ? `link/${profile.path}` : null}
            placeholder="링크를 설정해주세요!"
            attribute={EditProfileTypeEnum.PATH}
          />
        </div>
      </div>
      <DeleteButton />
    </section>
  );
}
