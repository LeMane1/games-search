import {Stack, Typography} from "@mui/material";
import {BackButton} from "@/app/error/back-button";

export default function ErrorPage(){
  return (
    <Stack spacing={2} direction='column' justifyContent='center' alignItems='center'>
      <Typography variant="h5" component="div" textAlign="center">
        Something went wrong. Please try again.
      </Typography>
      <BackButton />
    </Stack>
  )
}