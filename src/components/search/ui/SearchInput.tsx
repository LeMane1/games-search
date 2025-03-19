'use client'

import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import {TextField} from "@mui/material";
import { useDispatch } from 'react-redux'
import {changeSearchValue} from "@/lib/features/mainSlice";
import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "use-debounce";

export const SearchInput = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState<string>('')
  const [debouncedSearchValue] = useDebounce(searchValue, 2000);
  
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value: string = event.target.value
    if (value) setSearchValue(value)
  }
  
  useEffect(() => {
    if (debouncedSearchValue) dispatch(changeSearchValue(debouncedSearchValue))
  }, [debouncedSearchValue])
  
  return (
    <TextField
      id="search-input"
      variant="outlined"
      placeholder='Search...'
      sx={{width: '100%'}}
      onChange={handleSearchChange}
      slotProps={{
        input: {
          startAdornment: (
            <SearchSharpIcon sx={{mr: '.5rem'}}/>
          ),
        },
      }}/>
  )
}