import {fetchWithRetries} from "@/api/fetchWithRetries";
import {IGamesResponse} from "@/api/types";

export const getGames = async (searchParams: Record<string, string>) => {
  const gamesResponse = await fetchWithRetries<IGamesResponse>({
    url: '/games',
    searchParams,
  })
  if (gamesResponse) return gamesResponse;
  
  return null
}