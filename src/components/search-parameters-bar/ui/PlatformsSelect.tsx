'use client'

import {useGetPlatformsListQuery} from "@/api/api";
import {Checkbox, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {RootState} from "@/lib/store";
import {changeSelectedPlatforms} from "@/lib/slices/searchParametersSlice";

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

export default function PlatformsSelect() {
  const { data: platforms } = useGetPlatformsListQuery();
  const dispatch = useAppDispatch();
  const selectedPlatforms = useAppSelector((state: RootState) =>
    state.searchParametersReducer.selectedPlatforms
  );
  
  const handleOnChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    
    const selectedPlatforms = typeof value === 'string'
      ? [JSON.parse(value)]
      : value.map(v => JSON.parse(v));
    
    dispatch(changeSelectedPlatforms(selectedPlatforms));
  };
  
  return (
    <FormControl variant='standard' sx={{ width: '100%' }}>
      <InputLabel id="platforms-select-label">Platforms</InputLabel>
      <Select
        labelId="platforms-select-label"
        id="platforms-select"
        multiple
        value={selectedPlatforms.map(platform => JSON.stringify(platform))}
        onChange={handleOnChange}
        renderValue={(selectedPlatforms) => selectedPlatforms.map(platform => JSON.parse(platform).platformName).join(', ')}
        MenuProps={MenuProps}
      >
        {platforms?.results.map((platform) => (
          <MenuItem key={platform.id} value={JSON.stringify({platformId: platform.id, platformName: platform.name})}>
            <Checkbox checked={Boolean(selectedPlatforms?.find(p => p.platformId === platform.id))} />
            <ListItemText primary={platform.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}