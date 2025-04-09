import {fetchWithRetries} from "@/api/fetchWithRetries";
import {IGamesResponse} from "@/api/types";
import type {searchParamsType} from "@/api/getData";

export const getGames = async (searchParams: searchParamsType) => {
  const gamesResponse = await fetchWithRetries<IGamesResponse>({
    url: '/games',
    searchParams,
  })
  if (gamesResponse) return gamesResponse;
  
  return null
}