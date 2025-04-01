import GameCard from "@/app/games/games-list/ui/GameCard";
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
      search_precise: 'true'
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
            gap: 1
          }}
        >
          <Typography component="div" variant="h5">
            {games?.count} items for {search ? <b>{search}</b> : <b>all games</b>}
          </Typography>
          
          <SortSelect/>
        </Box>
      }
      
      <Grid container spacing={2} my={3}>
        {games && games.results.map((game) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={game.id}>
            <Suspense fallback={<CircularProgress/>}>
              <GameCard
                id={game.id}
                name={game.name}
                background_image={game.background_image}
                platforms={game.parent_platforms}
                metacritic={game.metacritic}
                genres={game.genres}
                released={game.released}
              />
            </Suspense>
          </Grid>
        ))
        }
      </Grid>
      
      <Pagination itemsCount={games?.count} defaultPage={page} />
    </>
  )
}