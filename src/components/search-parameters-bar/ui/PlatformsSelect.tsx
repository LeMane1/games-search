'use client'

import {Checkbox, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {RootState} from "@/lib/store";
import {changeSelectedPlatforms} from "@/lib/slices/searchParametersSlice";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {IGamePlatform} from "@/api/types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
  disableScrollLock: true
};

interface IPlatformsSelectProps {
  parentPlatformsList: IGamePlatform[];
}

export default function PlatformsSelect({parentPlatformsList}: IPlatformsSelectProps) {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const selectedPlatforms = useAppSelector((state: RootState) =>
    state.searchParametersReducer.selectedPlatforms
  );
  
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const parentPlatforms = params.get('parent_platforms');
    
    if (parentPlatforms){
      dispatch(changeSelectedPlatforms(parentPlatforms.split(',').map(Number)))
    }
  }, [])
  
  const handleOnChange = (event: SelectChangeEvent<number[]>) => {
    const value = event.target.value;

    const selectedPlatforms = typeof value === 'string'
      ? value.split(',').map(Number)
      : value as number[];
    dispatch(changeSelectedPlatforms(selectedPlatforms));
  };
  
  return (
    <FormControl variant='standard' sx={{ width: '100%' }}>
      <InputLabel id="platforms-select-label">Platforms</InputLabel>
      <Select
        labelId="platforms-select-label"
        id="platforms-select"
        multiple
        value={selectedPlatforms}
        onChange={handleOnChange}
        renderValue={(selected) => {
          if (!parentPlatformsList) return '';
          
          return selected.map(id =>
            parentPlatformsList.find(p => p.id === id)?.name || ''
          ).filter(Boolean).join(', ');
        }}
        MenuProps={MenuProps}
      >
        {parentPlatformsList.map((platform) => (
          <MenuItem key={platform.id} value={platform.id}>
            <Checkbox checked={Boolean(selectedPlatforms?.find(p => p === platform.id))} />
            <ListItemText primary={platform.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}