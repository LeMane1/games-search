import {getData} from "@/api/getData";
import {IGameDeveloper, IGameDevelopersResponse} from "@/api/types";
import {CircularProgress, Stack} from "@mui/material";
import DeveloperCard from "@/app/developers/developers-list/ui/DeveloperCard";
import {Grid} from "@mui/system";
import {Suspense} from "react";
import {Pagination} from "@/components/pagination";

interface IDevelopersListProps {
  page: number;
}

export default async function DevelopersList({page}: IDevelopersListProps) {
  const developersResponse: IGameDevelopersResponse = await getData<IGameDevelopersResponse>({
    url: 'developers',
    searchParams: {
      page: page.toString(),
      page_size: '20'
    },
  })
  
  const developers: IGameDeveloper[] = developersResponse.results
  
  return (
    <Stack spacing={3}>
      <Grid container spacing={2} my={3}>
        {developers && developers.map((developer: IGameDeveloper) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={developer.id}>
            <Suspense fallback={<CircularProgress/>}>
              <DeveloperCard name={developer.name} gamesCount={developer.games_count}/>
            </Suspense>
          </Grid>
        ))}
      </Grid>
      
      <Pagination itemsCount={developersResponse?.count} defaultPage={page} />
    </Stack>
  )
}