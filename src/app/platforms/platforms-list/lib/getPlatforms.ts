import {fetchWithRetries} from "@/api/fetchWithRetries";
import {IGamePlatformsResponse} from "@/api/types";
import type {searchParamsType} from "@/api/getData";

export const getPlatforms = async (searchParams: searchParamsType) => {
  const platforms = await fetchWithRetries<IGamePlatformsResponse>({
    url: '/platforms',
    searchParams,
  })
  if (platforms) return platforms
  
  return null
}