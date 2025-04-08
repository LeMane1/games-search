import {Grid} from "@mui/system";
import {Skeleton} from "@mui/material";

export default function GamesListSkeleton() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
        <Skeleton variant="rounded" width={'100%'} height={400} animation={'wave'}/>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
        <Skeleton variant="rounded" width={'100%'} height={400} animation={'wave'}/>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
        <Skeleton variant="rounded" width={'100%'} height={400} animation={'wave'}/>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
        <Skeleton variant="rounded" width={'100%'} height={400} animation={'wave'}/>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
        <Skeleton variant="rounded" width={'100%'} height={400} animation={'wave'}/>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
        <Skeleton variant="rounded" width={'100%'} height={400} animation={'wave'}/>
      </Grid>
    </Grid>
  )
}