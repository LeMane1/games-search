export const resetSearchParams = (searchParams: URLSearchParams, ...args: string[]): URLSearchParams => {
  const params = new URLSearchParams(searchParams);
  
  for (const arg of args) {
    if (params.get(arg)){
      params.delete(arg);
    }
  }
  
  if (params.get('page')){
    params.set('page', '1');
  }
  
  return params;
}