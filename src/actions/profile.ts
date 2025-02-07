"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/libs/supabase/server";

export async function updateUsername(username: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "No user found" };
  }

  const { error } = await supabase
    .from("profiles")
    .update({ username })
    .eq("user_id", user.id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/", "layout");
  return { success: true };
}

export async function updatePath(newPath: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "No user found" };
  }

  const { data: existingLinks, error: checkError } = await supabase
    .from("profiles")
    .select("id")
    .eq("path", newPath);

  if (checkError) {
    return { success: false, error: checkError.message };
  }

  if (existingLinks && existingLinks.length > 0) {
    return { success: false, error: "Path already exists" };
  }

  const { error } = await supabase
    .from("profiles")
    .update({ path: newPath, updated_at: new Date().toISOString() })
    .eq("user_id", user.id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/", "layout");
  return { success: true };
}
