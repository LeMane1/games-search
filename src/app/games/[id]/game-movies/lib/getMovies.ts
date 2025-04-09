import {fetchWithRetries} from "@/api/fetchWithRetries";
import {IGameMoviesResponse} from "@/api/types";

export const getMovies = async (gameId: number) => {
  const movies = await fetchWithRetries<IGameMoviesResponse>({
    url: `/games/${gameId}/movies`
  })
  if (movies) return movies.results
  
  return null
}