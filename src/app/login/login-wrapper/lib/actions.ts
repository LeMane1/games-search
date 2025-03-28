'use server'

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {Provider} from "@supabase/auth-js";

export async function signinWithOAuth(providerName: Provider) {
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: providerName,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  })
  
  if (error) {
    redirect('/error')
  }
  
  if (data.url) {
    redirect(data.url)
  }
}