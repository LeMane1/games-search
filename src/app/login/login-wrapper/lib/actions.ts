'use server'

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {Provider} from "@supabase/auth-js";

export async function signinWithOAuth(providerName: Provider) {
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: providerName,
    options: {
      redirectTo: `https://games-search-s237.vercel.app/auth/callback`,
    },
  })
  
  if (error) {
    redirect('/error')
  }
  
  if (data.url) {
    redirect(data.url)
  }
}