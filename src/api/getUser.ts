"use server";

import { createClient } from "@/utils/supabase/server";

export const getUser = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  
  if (error) {
    return null;
  }
  
  return user;
};

export const isAuthenticated = async () => {
  const user = await getUser();
  return !!user;
}