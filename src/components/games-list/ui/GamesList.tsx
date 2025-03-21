import {GameCard} from "@/components/games-list/ui/GameCard";
import {Grid} from "@mui/system";
import {Box, CircularProgress, Typography} from "@mui/material";
import {SortSelect} from "@/components/sort-select";
import {Pagination} from "@/components/pagination";
import {IGamesResponse} from "@/api/types";
import {Suspense} from "react";
import {getData} from "@/api/getData";

interface IGamesListProps {
  search: string;
  ordering: string;
  page: number;
}

export default async function GamesList(
  {
    search,
    ordering,
    page
  }: IGamesListProps){
  
  const games: IGamesResponse = await getData<IGamesResponse>({
    url: 'games',
    searchParams: {
      search,
      ordering,
      page: page.toString(),
    },
  })
  
  return (
    <>
      {games &&
        <Box
          my={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography component="div" variant="h5" sx={{ flexGrow: 1 }}>
            {games?.count} items for {search ? <b>{search}</b> : 'all games'}
          </Typography>
          
          <SortSelect/>
        </Box>
      }
      
      <Suspense key={search} fallback={<CircularProgress />}>
        <Grid container spacing={2} my={3}>
          {games && games.results.map((game) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={game.id}>
              <GameCard
                id={game.id}
                name={game.name}
                background_image={game.background_image}
                platforms={game.parent_platforms}
                metacritic={game.metacritic}
                genres={game.genres}
                released={game.released}
              />
            </Grid>
          ))
          }
        </Grid>
      </Suspense>
      
      <Pagination itemsCount={games?.count} defaultPage={page} />
    </>
  )
}