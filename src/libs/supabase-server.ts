import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecret = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseSecret) {
  throw new Error("Supabase URL or Service Role Key is missing");
}

const supabase = createClient(supabaseUrl, supabaseSecret, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export { supabase };
