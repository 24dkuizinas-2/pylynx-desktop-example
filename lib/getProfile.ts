import { getSupabase } from "./supabase";

export async function getProfile() {
  const supabase = getSupabase();   // ← moved inside the function

  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (error) return null;
  return data;
}
