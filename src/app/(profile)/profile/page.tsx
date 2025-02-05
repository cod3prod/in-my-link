import { createClient } from "@/libs/supabase/server";
import ProfileClient from "./_components/profile-client";

async function getProfileData() {
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
    .select("*")
    .eq("user_id", user?.id)
    .maybeSingle();

  console.log("debug profile", profile);

  return { user, profile };
}

export default async function ProfilePage() {
  const { user, profile } = await getProfileData();
  console.log("profile", profile);
  console.log("user", user);

  return (
    <ProfileClient initialProfile={profile} email={user!.email!} />
  );
}