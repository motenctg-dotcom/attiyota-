import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// এই ক্লায়েন্ট শুধু সার্ভার সাইড API route এ ব্যবহার হবে।
// service_role key ব্রাউজারে কখনো পাঠানো হয় না।
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
