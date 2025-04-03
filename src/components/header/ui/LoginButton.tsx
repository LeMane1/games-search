'use client'

import {Button} from "@mui/material";

export default function LoginButton() {
  return (
    <Button variant={'contained'} component='a' href={'/login'}>Login</Button>
  )
}