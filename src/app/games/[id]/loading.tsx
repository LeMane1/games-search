import {Box, Skeleton, Stack} from "@mui/material";
import {Grid} from "@mui/system";

export default function Loading() {
  return (
    <Stack
      spacing={5}
      sx={{
        width: '100%',
        height: '100%',
        // backgroundColor: 'white',
      }}
      direction={{
        xs: 'column',
        sm: 'column',
        md: 'row',
        lg: 'row',
        xl: 'row'
    }}>
      <Skeleton
        variant="rounded"
        sx={{
          width: {
          xs: '100%',
          sm: '100%',
          md: 300,
          lg: 300,
          xl: 300
        },
        height: 400,
        objectFit: 'cover',
        borderRadius: 2
      }}/>
      
      
      <Stack sx={{width: '100%'}}>
        <Skeleton variant="rounded" width={'100%'} height={60} />
        <Box mb={2}/>
        
        <Skeleton variant="rounded" width={'100%'} height={24}/>
        <Box mb={3}/>
        
        <Skeleton variant="rounded" width={'100%'} height={26}/>
        <Box mb={4}/>
        
        <Skeleton variant="rounded" width={'100%'} height={30}/>
        <Box mb={2}/>
        
        <Skeleton variant="rounded" width={'100%'} height={400}/>
        <Box mb={4}/>
        
        <Skeleton variant="rounded" width={'100%'} height={30}/>
        <Box mb={2}/>
        
        <Grid container spacing={2}>
          <Grid size={4}>
            <Skeleton variant="rounded" width={'100%'} height={100}/>
          </Grid>
          <Grid size={4}>
            <Skeleton variant="rounded" width={'100%'} height={100}/>
          </Grid>
          <Grid size={4}>
            <Skeleton variant="rounded" width={'100%'} height={100}/>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  )
}