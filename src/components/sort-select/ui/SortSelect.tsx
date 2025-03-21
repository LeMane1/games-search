'use client'

import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useDebouncedCallback} from "use-debounce";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export const SortSelect = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleChange = useDebouncedCallback((event: SelectChangeEvent) => {
    const sortValue:string = event.target.value
    const params = new URLSearchParams(searchParams);
    
    if (sortValue) {
      params.set('ordering', sortValue);
    } else {
      params.delete('ordering');
    }
    
    replace(`${pathname}?${params.toString()}`);
  }, 1000)
  
  return (
    <FormControl variant="filled" sx={{ minWidth: 200 }}>
      <InputLabel id="sort-select">Sort by</InputLabel>
      <Select
        labelId="sort-select"
        id="sort-select"
        onChange={handleChange}
        value={searchParams.get('ordering')?.toString()}
        displayEmpty={false}
      >
        <MenuItem value='-name'>Name</MenuItem>
        <MenuItem value='-released'>Release Date</MenuItem>
        <MenuItem value='-metacritic'>Metacritic Rating</MenuItem>
      </Select>
    </FormControl>
  )
}