'use client'

import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import {TextField} from "@mui/material";
import { useDispatch } from 'react-redux'
import {changeSearchValue} from "@/lib/features/mainSlice";
import {ChangeEvent} from "react";

export const SearchInput = () => {
  const dispatch = useDispatch()
  
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value: string = event.target.value
    dispatch(changeSearchValue(value))
  }
  
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