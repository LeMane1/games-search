'use server'

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {Provider} from "@supabase/auth-js";
import sanitizeHtml from "sanitize-html";
import {revalidatePath} from "next/cache";
import {LoginFormData, LoginSchema, RegisterFormData, RegisterSchema} from '@/app/auth/lib/schema'

export async function login(formData: LoginFormData) {
  const supabase = await createClient()
  const sanitizedFormData = {
    email: sanitizeHtml(formData.email as string),
    password: sanitizeHtml(formData.password as string),
  }
  
  const checkFormResult = LoginSchema.safeParse(sanitizedFormData)
  
  if (!checkFormResult.success) {
    console.error('Failed while checkFormResult in login', checkFormResult.error.format());
    redirect('/error')
  }
  
  const { error } = await supabase.auth.signInWithPassword(sanitizedFormData)
  
  if (error) {
    console.error('Failed while signInWithPassword', error)
    redirect('/error')
  }
  
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: RegisterFormData) {
  const supabase = await createClient()
  const sanitizedFormData = {
    userName: sanitizeHtml(formData.userName as string),
    email: sanitizeHtml(formData.email as string),
    password: sanitizeHtml(formData.password as string)
  }
  
  const checkFormResult = RegisterSchema.safeParse(sanitizedFormData)
  
  if (!checkFormResult.success) {
    console.error('Failed while checkFormResult in register', checkFormResult.error.format());
    redirect('/error')
  }
  
  const serverFormData = {
    email: sanitizedFormData.email,
    password: sanitizedFormData.password,
    options: {
      data: {
        user_name: sanitizedFormData.userName,
        email: sanitizedFormData.email,
      }
    }
  }
  
  const { error } = await supabase.auth.signUp(serverFormData)
  
  if (error) {
    console.error('Failed while signUp', error)
    redirect('/error')
  }
  
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function logout() {
  const supabase = await createClient()
  const {error} = await supabase.auth.signOut()
  
  if (error) {
    console.error('Failed while logout', error)
    redirect('/error')
  }
  
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