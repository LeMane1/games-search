'use client'

import CloseIcon from "@mui/icons-material/Close";
import {IconButton} from "@mui/material";
import {useAppDispatch} from "@/lib/hooks";
import {changeDrawerState} from "@/lib/slices/mainSlice";

export default function CloseButton() {
  const dispatch = useAppDispatch();
  
  return (
    <IconButton size="large" onClick={() => dispatch(changeDrawerState())}>
      <CloseIcon/>
    </IconButton>
  )
}