'use server'

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {Provider} from "@supabase/auth-js";
import sanitizeHtml from "sanitize-html";
import {revalidatePath} from "next/cache";
import type {LoginFormData, RegisterFormData} from '@/app/auth/lib/schema'

export async function login(formData: LoginFormData) {
  const supabase = await createClient()
  const sanitizedFormData = {
    email: sanitizeHtml(formData.email as string),
    password: sanitizeHtml(formData.password as string),
  }
  
  const { error } = await supabase.auth.signInWithPassword(sanitizedFormData)
  
  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: RegisterFormData) {
  const supabase = await createClient()
  
  const sanitizedFormData = {
    email: sanitizeHtml(formData.email as string),
    password: sanitizeHtml(formData.password as string),
    options: {
      data: {
        user_name: sanitizeHtml(formData.userName as string),
        email: sanitizeHtml(formData.email as string),
      }
    }
  }
  
  const { error } = await supabase.auth.signUp(sanitizedFormData)
  
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