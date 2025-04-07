'use client'

import TuneIcon from "@mui/icons-material/Tune";
import {Fab} from "@mui/material";
import {useAppDispatch} from "@/lib/hooks";
import {changeSearchParametersModalState} from "@/lib/slices/mainSlice";

export default function SearchParametersDrawerButton() {
  const dispatch = useAppDispatch();
  
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(changeSearchParametersModalState(true))
  }
  
  return (
    <Fab
      onClick={handleOnClick}
      color="primary"
      aria-label="add"
      sx={{
        position: 'fixed',
        right: 20,
        bottom: 20,
    }}>
      <TuneIcon />
    </Fab>
  )
}