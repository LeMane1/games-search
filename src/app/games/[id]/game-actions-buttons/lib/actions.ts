'use server'

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {getUser} from "@/api/getUser";
import {revalidatePath} from "next/cache";

export async function addGameToPurchasedList({gameId, gameName, gameImage}: {gameId: number, gameName: string, gameImage: string}) {
  const supabase = await createClient()
  const user = await getUser()
  
  if (user) {
    const {data: existingGame, error: checkGameError} = await supabase
      .from('games')
      .select('id')
      .eq('id', gameId)
    
    if (existingGame?.length === 0) {
      const { error: addToGamesError } = await supabase
        .from('games')
        .insert([{ id: gameId, game_name: gameName, game_image: gameImage }]);
      
      console.log(addToGamesError);
    }
    
    const { error: addToUserGamesError } = await supabase
      .from('user_games')
      .insert([{ user_id: user.id, game_id: gameId}]);
    
    if (addToUserGamesError || checkGameError) {
      console.log(addToUserGamesError);
      redirect('/error')
    }
  }
  
  revalidatePath('/', 'layout')
}

export async function checkGameOwn(gameId: number) {
  const supabase = await createClient()
  const user = await getUser()

  if (user) {
    const { data, error } = await supabase
      .from('user_games')
      .select()
      .eq('user_id', user.id)
      .eq('game_id', gameId)
      .maybeSingle();

    if (error) {
      console.error('Error checking game ownership:', error);
      redirect('/error');
      return false;
    }
    
    console.log('Game ownership check result:', data);
    return !!data;
  }
}

export async function removeGameFromPurchasedList(gameId: number) {
  const supabase = await createClient()
  const user = await getUser()
  
  if (user) {
    const {error} = await supabase
      .from('user_games')
      .delete()
      .match({game_id: gameId, user_id: user.id})
    
    if (error) {
      console.error('Error deleting game', error);
      redirect('/error');
    }
  }
  
  revalidatePath('/', 'layout')
}