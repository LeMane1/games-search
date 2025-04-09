import {MAX_RETRIES} from "@/api/constants";
import {getData} from "@/api/getData";

export const fetchWithRetries = async<T> (url: string): Promise<T | null> => {
  const maxRetries = MAX_RETRIES;
  let attempt = 0;
  
  while (attempt < maxRetries) {
    try {
      const response = await getData<T>({
        url: url
      });
      
      if (response) return response
    } catch (error) {
      attempt++;
      console.warn(`Try ${attempt} was not successful`, error);
      if (attempt >= maxRetries) {
        console.error(`Can't fetch data after ${maxRetries} retries`);
        return null;
      }
    }
  }
  
  return null
}