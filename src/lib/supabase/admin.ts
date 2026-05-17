import "server-only";
import { createClient } from "@supabase/supabase-js";
import { getSupabaseServiceRole } from "./env";

export function createAdminClient() {
  const env = getSupabaseServiceRole();
  if (!env) return null;
  return createClient(env.url, env.serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
