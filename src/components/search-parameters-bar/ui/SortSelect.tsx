'use client'

import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {changeSortOrdering} from "@/lib/slices/searchParametersSlice";
import {RootState} from "@/lib/store";

export const SortSelect = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const sortOrdering = useAppSelector((state: RootState) => state.searchParametersReducer.sortOrdering)
  
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const ordering = params.get('ordering');
    
    if (ordering){
      dispatch(changeSortOrdering(ordering))
    }
  }, [])
  
  const handleOnChange = (event: SelectChangeEvent) => {
    const sortValue:string = event.target.value
    dispatch(changeSortOrdering(sortValue));
  }
  
  return (
    <FormControl variant='standard' sx={{ width: '100%' }}>
      <InputLabel id="sort-select">Ordering</InputLabel>
      <Select
        labelId="sort-select"
        id="sort-select"
        onChange={handleOnChange}
        value={sortOrdering}
        displayEmpty={false}
        MenuProps={{
          disableScrollLock: true
        }}
      >
        <MenuItem value='-name'>Name</MenuItem>
        <MenuItem value='-released'>Release Date</MenuItem>
        <MenuItem value='-metacritic'>Metacritic Rating</MenuItem>
      </Select>
    </FormControl>
  )
}