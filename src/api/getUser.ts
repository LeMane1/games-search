"use server";

import { createClient } from "@/utils/supabase/server";
import {redirect} from "next/navigation";

export interface IUser{
  id: string;
  username: string;
  created_at: string;
  email: string;
}

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

export const getCurrentUserData = async (): Promise<IUser | null> => {
  const supabase = await createClient();
  const user = await getUser();
  
  if (!user){
    return null
  }
  
  const { data: userProfile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();
  
  if (profileError) {
    redirect('/error')
  }
  
  return userProfile;
}