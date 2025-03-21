import {Box, CircularProgress} from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <CircularProgress />
    </Box>
  )
}