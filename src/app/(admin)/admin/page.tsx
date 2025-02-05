import ProfileCard from "@/components/profile-card";
import { createClient } from "@/libs/supabase/server";
import BlockContainer from "./_components/block-container";
import { sortBySequence } from "@/utils/sort";

async function getAdminData() {
  const supabase = await createClient();

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // console.log("session", session);
  // console.log("user", user);

  const { data: profile } = await supabase
    .from("profiles")
    .select("*, blocks(*, schedules(*))")
    .eq("user_id", user?.id)
    .maybeSingle();

  console.log("admin debug", profile);

  return { profile };
}

export default async function Page() {
  const { profile } = await getAdminData();
  // console.log("profile", profile);

  const blocks = profile?.blocks || [];
  return (
    <>
      <ProfileCard
        profile_img={profile?.profile_img || null}
        username={profile?.username || null}
      />
      <BlockContainer
        initialBlocks={sortBySequence(blocks, "sequence", "asc")}
      />
    </>
  );
}
