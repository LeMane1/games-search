import {GameCard} from "@/components/games-list/ui/GameCard";
import {Grid} from "@mui/system";
import {Box, CircularProgress, Typography} from "@mui/material";
import {SortSelect} from "@/components/sort-select";
import {Pagination} from "@/components/pagination";
import {IGamesResponse} from "@/api/types";
import {Suspense} from "react";

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
  const gamesResponse = await fetch(`https://api.rawg.io/api/games?search=${search}&ordering=${ordering}&key=c717a6d152e74669a6066ea4cfe239b1`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  const games: IGamesResponse = await gamesResponse.json();
  
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
            {games?.count} items for <b>{search}</b>
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