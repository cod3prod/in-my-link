import Link from "next/link";
import Aside from "./aside";
import Nav from "./nav";
import { createClient } from "@/libs/supabase/server";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user?.id)
    .single();

  return (
    <header className="bg-primary-450 text-white px-4 fixed w-full h-16 z-10 shadow-lg">
      <div className="container h-full mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center h-full">
          <h1 className="text-2xl font-bold hover:text-primary-200 transition-colors duration-300">
            IN MY LINK
          </h1>
        </Link>
        <Nav profile={profile || null} />
        <Aside profile={profile || null}/>
      </div>
    </header>
  );
}
