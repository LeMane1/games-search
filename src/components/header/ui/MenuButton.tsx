'use client'

import MenuIcon from "@mui/icons-material/Menu";
import {IconButton} from "@mui/material";
import {useAppDispatch} from "@/lib/hooks";
import {changeDrawerState} from "@/lib/slices/mainSlice";

export default function MenuButton(){
  const dispatch = useAppDispatch();
  
  return (
    <IconButton onClick={() => dispatch(changeDrawerState())}>
      <MenuIcon />
    </IconButton>
  )
}