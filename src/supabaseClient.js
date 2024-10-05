import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // Correct variable name

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL or Anon Key is missing.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
