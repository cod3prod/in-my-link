import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({ type, token_hash });
    if (!error) {

      const { data: user, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        throw new Error("Failed to retrieve user");
      }

      const userId = user.user?.id;
      if (!userId) {
        throw new Error("User ID not found");
      }

      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("id")
        .eq("user_id", userId)
        .single();

      if (!existingProfile) {
        const { error: insertError } = await supabase.from("profiles").insert([
          {
            user_id: userId,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);

        if (insertError) {
          throw new Error("Failed to create profile");
        }
      }

      redirect(next);
    }
  }

  throw new Error("Email verification failed");
}
