'use client'

import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import {TextField} from "@mui/material";
import {ChangeEvent} from "react";
import {useDebouncedCallback} from "use-debounce";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleSearchChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value: string = event.target.value
    const params = new URLSearchParams(searchParams);
    
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    
    replace(`${pathname}?${params.toString()}`);
  }, 1000)
  
  return (
    <TextField
      id="search-input"
      variant="outlined"
      placeholder='Search...'
      sx={{width: '100%'}}
      onChange={handleSearchChange}
      defaultValue={searchParams.get('search')?.toString()}
      slotProps={{
        input: {
          startAdornment: (
            <SearchSharpIcon sx={{mr: '.5rem'}}/>
          ),
        },
      }}/>
  )
}