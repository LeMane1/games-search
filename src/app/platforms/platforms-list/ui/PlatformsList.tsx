import {IGamePlatform, IGamePlatformsResponse} from "@/api/types";
import {getData} from "@/api/getData";
import {Grid} from "@mui/system";
import {Suspense} from "react";
import {CircularProgress, Stack} from "@mui/material";
import DeveloperCard from "@/app/developers/developers-list/ui/DeveloperCard";
import {Pagination} from "@/components/pagination";

interface IPlatformsListProps {
  page: number;
}

export default async function PlatformsList({page}: IPlatformsListProps) {
  const platformsResponse: IGamePlatformsResponse = await getData<IGamePlatformsResponse>({
    url: 'platforms',
    searchParams: {
      page: page.toString()
    },
  })
  
  const platforms: IGamePlatform[] = platformsResponse.results
  
  return (
    <Stack spacing={3}>
      <Grid container spacing={2} my={3}>
        {platforms && platforms.map((platform: IGamePlatform) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={platform.id}>
            <Suspense fallback={<CircularProgress/>}>
              <DeveloperCard
                name={platform.name}
                gamesCount={platform.games_count}
              />
            </Suspense>
          </Grid>
        ))}
      </Grid>
      
      <Pagination itemsCount={platformsResponse?.count} defaultPage={page}/>
    </Stack>
  )
}