import {IGamePlatform, IGamePlatformsResponse} from "@/api/types";
import {fetchWithRetries} from "@/api/fetchWithRetries";

export const getParentPlatforms = async (): Promise<IGamePlatform[] | null>  => {
  const parentPlatforms = await fetchWithRetries<IGamePlatformsResponse>({
    url: '/platforms/lists/parents'
  })
  if (parentPlatforms) return parentPlatforms.results;
  
  return null
}