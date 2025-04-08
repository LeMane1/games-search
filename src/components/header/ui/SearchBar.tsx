'use client'

import {Button, InputAdornment, TextField} from "@mui/material";
import {useState, KeyboardEvent, useEffect} from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import {redirect, usePathname, useRouter, useSearchParams} from "next/navigation";

export default function SearchBar(){
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const searchValue = params.get('search')
    
    if (searchValue) setSearchText(searchValue)
  },[searchParams])
  
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    
    if (searchText !== '') {
      params.set('search', searchText);
    } else {
      params.delete('search');
    }
    
    if (params.get('page')){
      params.set('page', '1');
    }
    
    if (pathname.indexOf('/games') === -1){
      redirect(`/games?${params.toString()}`)
    }
    
    replace(`${pathname}?${params.toString()}`);
  }
  
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
     if (event.key === 'Enter' && searchText !== '') {
       handleSearch();
     }
  }
  
  return (
    <TextField
      sx={{
        flexGrow: 1,
      }}
      autoComplete={'off'}
      size='small'
      variant='outlined'
      placeholder="I would like to find a..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e)}
      slotProps={{
        input: {
          startAdornment: (
            <SearchSharpIcon sx={{mr: '.5rem'}}/>
          ),
          sx:{
            paddingRight: '2px',
          },
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant='text'
                size={'small'}
                color={'secondary'}
                onClick={handleSearch}
                sx={{
                  color: 'white'
                }}
              >
                Search
              </Button>
            </InputAdornment>
          ),
        },
      }}
    />
  )
}