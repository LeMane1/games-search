import {IGameDeveloper} from "@/api/types";
import {Stack, Typography} from "@mui/material";
import DeveloperCard from "@/app/developers/developers-list/ui/DeveloperCard";
import {Grid} from "@mui/system";
import {Pagination} from "@/components/pagination";
import {getDevelopers} from "@/app/developers/developers-list/lib/getDevelopers";

interface IDevelopersListProps {
  page: number;
}

export default async function DevelopersList({page}: IDevelopersListProps) {
  const developers = await getDevelopers({
    page: page.toString(),
    page_size: '20'
  })
  
  return (
    <Stack spacing={3}>
      <Grid container spacing={2} my={3}>
        {developers && developers.results.length > 0 ? developers.results.map((developer: IGameDeveloper) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={developer.id}>
              <DeveloperCard
                name={developer.name}
                gamesCount={developer.games_count}
              />
          </Grid>
        ))
          :
          <Typography component="h6" variant="h6" color="textSecondary">
            No developers found
          </Typography>
        }
      </Grid>
      
      <Pagination itemsCount={developers?.count ?? 0} defaultPage={page}/>
    </Stack>
  )
}