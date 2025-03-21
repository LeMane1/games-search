import {Box, Skeleton, Stack} from "@mui/material";
import {Grid} from "@mui/system";

export default function Loading() {
  return (
    <Stack sx={{width: '100%'}}>
      <Skeleton variant="rounded" width={'100%'} height={60} />
      <Box mb={4}/>
      
      <Skeleton variant="rounded" width={'100%'} height={50} />
      <Box mb={4}/>
      
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <Skeleton variant="rounded" width={'100%'} height={400}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <Skeleton variant="rounded" width={'100%'} height={400}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <Skeleton variant="rounded" width={'100%'} height={400}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <Skeleton variant="rounded" width={'100%'} height={400}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <Skeleton variant="rounded" width={'100%'} height={400}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <Skeleton variant="rounded" width={'100%'} height={400}/>
        </Grid>
      </Grid>
    </Stack>
  )
}