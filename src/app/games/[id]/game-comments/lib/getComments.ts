import {fetchWithRetries} from "@/api/fetchWithRetries";
import {IGameCommentsResponse} from "@/api/types";

export const getComments = async (gameId: number) => {
  const comments = await fetchWithRetries<IGameCommentsResponse>({
    url: `/games/${gameId}/reddit`
  })
  
  if (comments) return comments.results;
}