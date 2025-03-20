import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState, useEffect} from 'react'
import {useDebounce} from "use-debounce";
import {useAppDispatch} from "@/lib/hooks";
import {changeOrderingValue} from "@/lib/features/mainSlice";

export const SortSelect = () => {
  const [sortValue, setSortValue] = useState('');
  const [debouncedSortValue] = useDebounce(sortValue, 1000)
  const dispatch = useAppDispatch()
  
  const handleChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value);
  };
  
  useEffect(() => {
    if (debouncedSortValue){
      dispatch(changeOrderingValue(debouncedSortValue))
    }
  }, [debouncedSortValue, dispatch])
  
  return (
    <FormControl variant="filled" sx={{ minWidth: 200 }}>
      <InputLabel id="demo-simple-select-filled-label">Sort by</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={sortValue}
        onChange={handleChange}
        defaultValue='name'
        displayEmpty={false}
      >
        <MenuItem value='-name'>Name</MenuItem>
        <MenuItem value='-released'>Release Date</MenuItem>
        <MenuItem value='-metacritic'>Metacritic Rating</MenuItem>
      </Select>
    </FormControl>
  )
}