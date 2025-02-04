import { notFound } from "next/navigation";
import { supabase } from "@/libs/supabase-server";
import ProfileCard from "@/components/profile-card";
import BlockContainer from "../_components/block-container";
import { Suspense } from "react";
import Loader from "@/components/ui/loader";

async function getBlocks(path: string) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*, blocks(*, schedules(*))")
      .eq("path", path)
      .single();
    // data = {id : ~~, profile_image: ~~ ... , blocks: [...]}
    if (error) throw error;

    const newBlocks = data.blocks.filter((block: Block) => block.active === 1);

    const newProfile: Profile = {
      id: data.id,
      user_id: data.user_id,
      username: data.username,
      path: data.path,
      profile_img: data.profile_img,
      public_id: data.public_id,
      visitor_count: data.number | 0,
      updated_at: data.updated_at,
      created_at: data.created_at,
    };

    return { profile: newProfile, blocks: newBlocks };
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const result = await getBlocks(path);

  if (!result?.profile) notFound();

  const { profile } = result;

  return {
    title: `${profile.username}님의 링크`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await  params;

  const result = await getBlocks(path);

  if (!result?.profile || !result?.blocks) notFound();
  const { profile, blocks } = result;
  return (
    <Suspense fallback={<Loader />}>
      <ProfileCard
        profile_img={profile?.profile_img || null}
        username={profile?.username || "존재하지 않는 링크입니다"}
        className="bg-transparent"
      />
      <BlockContainer blocks={blocks} />
    </Suspense>
  );
}