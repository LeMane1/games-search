'use client'

import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

export const BackButton = () => {
  const router = useRouter()
  
  return (
    <Button
      variant="outlined"
      component='button'
      onClick={() => router.back()}
      sx={{
        width: 'fit-content',
      }}
    >
      Back
    </Button>
  )
}