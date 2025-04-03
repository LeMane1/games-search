import {FavoriteGamesResponse} from "@/app/games/games-list/lib/actions";

export const checkFavorite = (favoriteGames: FavoriteGamesResponse[], gameId: number): boolean => {
  for (const game of favoriteGames) {
    if (game.game_id === gameId) return true;
  }
  return false
}