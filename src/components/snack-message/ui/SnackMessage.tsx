'use client'

import {Slide, SlideProps, Snackbar} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {RootState} from "@/lib/store";
import {changeSnackMessage} from "@/lib/slices/mainSlice";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export default function SnackMessage() {
  const snackMesssage = useAppSelector((state: RootState)=> state.mainReducer.snackMessage)
  const dispatch = useAppDispatch();
  
  return (
    <Snackbar
      open={snackMesssage !== ''}
      onClose={() => dispatch(changeSnackMessage(''))}
      slots={{ transition: SlideTransition }}
      message={snackMesssage}
      autoHideDuration={2000}
    />
  )
}