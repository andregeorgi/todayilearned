import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vesoyefqgfludskzniaz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlc295ZWZxZ2ZsdWRza3puaWF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwNDQ1MDYsImV4cCI6MTk5NDYyMDUwNn0.Iai9Ahxr0HQaXVqXgGXIDaACZby49iRAGeyX4DQFuAk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
