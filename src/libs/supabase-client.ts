import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseSecret = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseKey || !supabaseSecret) {
  throw new Error("Supabase URL or Anon Key is missing");
}
const supabase = createClient(supabaseUrl!, supabaseKey!);
const supabaseService = createClient(supabaseUrl!, supabaseSecret!, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export { supabase, supabaseService };
