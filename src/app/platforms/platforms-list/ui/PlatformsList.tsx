import {IGamePlatform} from "@/api/types";
import {Grid} from "@mui/system";
import {Stack, Typography} from "@mui/material";
import PlatformCard from "@/app/platforms/platforms-list/ui/PlatformCard";
import {Pagination} from "@/components/pagination";
import {getPlatforms} from "@/app/platforms/platforms-list/lib/getPlatforms";

interface IPlatformsListProps {
  page: number;
}

export default async function PlatformsList({page}: IPlatformsListProps) {
  const platforms = await getPlatforms({
    page: page.toString()
  })
  
  return (
    <Stack spacing={3}>
      <Grid container spacing={2} my={3}>
        {platforms && platforms.results.length > 0 ? platforms.results.map((platform: IGamePlatform) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={platform.id}>
              <PlatformCard
                name={platform.name}
                gamesCount={platform.games_count}
              />
          </Grid>
        ))
          :
          <Typography component="h6" variant="h6" color="textSecondary">
            No platforms found
          </Typography>
        }
      </Grid>
      
      <Pagination itemsCount={platforms?.count ?? 0} defaultPage={page}/>
    </Stack>
  )
}