'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import {getUser} from "@/api/getUser";
import sanitizeHtml from 'sanitize-html';

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
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: sanitizeHtml(formData.get('email') as string),
    password: sanitizeHtml(formData.get('password') as string),
    userName: sanitizeHtml(formData.get('name') as string),
  }
  
  const { error } = await supabase.auth.signUp(data)
  
  if (error) {
    redirect('/error')
  }
  
  const user = await getUser()

  if (user) {
    const { error } = await supabase
      .from('profiles')
      .insert([{ id: user.id, username: data.userName, email: data.email }]);

    if (error) {
      redirect('/error')
    }
  }
  
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}