'use server'

import {createClient} from "@/utils/supabase/server";
import {getUser} from "@/api/getUser";
import {redirect} from "next/navigation";

interface IGame {
  gameId: number;
  gameName: string;
  gameImage: string;
}

export async function getGamesCollection(): Promise<IGame[]> {
  const supabase = await createClient()
  const user = await getUser()
  
  if (user) {
    const {data: userGames, error: userGamesError} = await supabase
      .from('user_games')
      .select('game_id')
      .eq('user_id', user.id)
    
    if (userGamesError) {
      console.error('Error deleting game', userGamesError);
      redirect('/error');
      return [];
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
      console.error('Error fetching games:', gamesError);
      return [];
    }
    
    const games: IGame[] = gamesData.map(game => ({
      gameId: game.id,
      gameName: game.game_name ?? '',
      gameImage: game.game_image ?? ''
    }));
    
    return games
  }
  
  return [];
}