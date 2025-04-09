'use client'

import {Button, Stack, Typography} from "@mui/material";

export default function Error(){
  
  const handleRefresh = () => {
    window.location.reload()
  };
  
  return (
    <Stack direction="column" spacing={2}>
      <Typography component='h4' variant="h4">
        Something went wrong. Please try again.
      </Typography>
      
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={handleRefresh}>
          Reload
        </Button>
        
        <Button variant="contained" color="secondary" href={'/'}>
          Back to home
        </Button>
      </Stack>
    </Stack>
  )
}