'use server'

import {createClient} from "@/utils/supabase/server";
import {getUser} from "@/api/getUser";
import {redirect} from "next/navigation";

export interface FavoriteGamesResponse {
  user_id: string;
  game_id: number;
  created_at: string;
}

export async function getFavoriteGames(): Promise<FavoriteGamesResponse[] | null> {
  const supabase = await createClient()
  const user = await getUser()
  
  if (user) {
    const { data, error } = await supabase
      .from('user_games')
      .select()
      .eq('user_id', user.id)
    
    if (error) {
      console.error('Error getting favorite games:', error);
      redirect('/error');
      return null;
    }
    
    console.log('Favorite games result:', data);
    return data;
  }else{
    return null;
  }
}