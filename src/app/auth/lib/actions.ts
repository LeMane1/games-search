'use server'

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {Provider} from "@supabase/auth-js";
import sanitizeHtml from "sanitize-html";
import {revalidatePath} from "next/cache";

export async function login(formData: FormData) {
  const supabase = await createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: sanitizeHtml(formData.get('email') as string),
    password: sanitizeHtml(formData.get('password') as string),
  }
  
  const { error } = await supabase.auth.signInWithPassword(data)
  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  
  const data = {
    email: sanitizeHtml(formData.get('email') as string),
    password: sanitizeHtml(formData.get('password') as string),
    options: {
      data: {
        user_name: sanitizeHtml(formData.get('name') as string),
        email: sanitizeHtml(formData.get('email') as string),
      }
    }
  }
  
  const { error } = await supabase.auth.signUp(data)
  
  if (error) {
    redirect('/error')
  }
  
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}

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