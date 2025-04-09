import {fetchWithRetries} from "@/api/fetchWithRetries";
import {IGameDevelopersResponse} from "@/api/types";
import type {searchParamsType} from "@/api/getData";

export const getDevelopers = async (searchParams: searchParamsType) => {
  const developers = await fetchWithRetries<IGameDevelopersResponse>({
    url: '/developers',
    searchParams,
  })
  if (developers) return developers
  
  return null
}