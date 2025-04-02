import {Button, Stack, Typography} from "@mui/material";
import {BackButton} from "@/app/error/back-button";

export default function ErrorPage(){
  return (
    <Stack spacing={2} direction='column' justifyContent='center' alignItems='center'>
      <Typography variant="h5" component="div" textAlign="center">
        Something went wrong. Please try again.
      </Typography>
      
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Button variant={'contained'} component='a' href={'/'}>Home</Button>
        <BackButton />
      </Stack>
    </Stack>
  )
}