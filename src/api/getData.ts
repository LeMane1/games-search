interface IGetDataProps{
  url: string;
  searchParams?: Record<string, string>;
}

const defaultUrlBase: string ='https://api.rawg.io/api/'

export const getData = async<T> (
  {
    url,
    searchParams,
  }: IGetDataProps
):Promise<T> => {
  
  const queryString: string = getQueryString(searchParams)
  
  const response = await fetch(''+defaultUrlBase + url + queryString, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  
  return await response.json()
}

function getQueryString(searchParams?: Record<string, string>): string{
  const urlSearchParams: URLSearchParams = new URLSearchParams(searchParams);
  
  if (process.env.RAWG_API_KEY) urlSearchParams.set('key', process.env.RAWG_API_KEY);
  
  return '?'+urlSearchParams.toString();
}