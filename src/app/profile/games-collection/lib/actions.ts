'use server'

import {createClient} from "@/utils/supabase/server";
import {getUser} from "@/api/getUser";
import {redirect} from "next/navigation";

interface IGame {
  gameId: number;
  gameName: string;
  gameImage: string;
}

export async function getGamesCollection(): Promise<IGame[] | null> {
  const supabase = await createClient()
  const user = await getUser()
  
  if (user) {
    const {data: userGames, error: userGamesError} = await supabase
      .from('user_games')
      .select('game_id')
      .eq('user_id', user.id)
    
    if (userGamesError) {
      console.error('Error fetching game_id for selected user_id', userGamesError);
      return null;
    }
    
    if (!userGames || userGames.length === 0) {
      return [];
    }
    
    const gameIds = userGames.map(item => item.game_id);
    
    const { data: gamesData, error: gamesError } = await supabase
      .from('games')
      .select('*')
      .in('id', gameIds);
    
    if (gamesError) {
      console.error('Error fetching rows with selected game_ids', gamesError);
      return null;
    }
    
    const games: IGame[] = gamesData.map(game => ({
      gameId: game.id,
      gameName: game.game_name ?? '',
      gameImage: game.game_image ?? ''
    }));
    
    return games
  }
  
  return null;
}