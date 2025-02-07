"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/libs/supabase/server";
import { supabase as supabaseService } from "@/libs/supabase/server";

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN;

export async function login(email: string, password: string) {
  const supabase = await createClient();
  // console.log("email", email, "password", password);
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function signup(email: string, password: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${BASE_URL}/callback`,
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/", "layout");
  return { success: true };
}

export async function signout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function deleteAccount() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) throw new Error("No user found");
    console.log(user);
    const { error } = await supabaseService.auth.admin.deleteUser(user.id);
    if (error) {
      throw new Error(`Failed to delete user: ${error.message}`);
    }

    console.log("User deleted successfully");
  } catch (error) {
    console.log("deleteAccount error", error);
    throw error
  }
}

export async function resetPassword(newPassword: string) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) throw new Error("No user found");

    const { error } = await supabaseService.auth.admin.updateUserById(user.id, {
      password: newPassword,
    });
    
    if (error) {
      throw new Error(`Failed to reset password: ${error.message}`);
    }
  } catch (error) {
    console.error("resetPassword error", error);
    throw error;
  }
}
