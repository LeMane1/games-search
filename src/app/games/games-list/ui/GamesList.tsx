import GameCard from "@/app/games/games-list/ui/GameCard";
import {Grid} from "@mui/system";
import {CircularProgress, Stack, Typography} from "@mui/material";
import {Pagination} from "@/components/pagination";
import {IGamesResponse} from "@/api/types";
import {Suspense} from "react";
import {getData} from "@/api/getData";
import {checkAuth} from "@/api/getUser";
import {getFavoriteGames} from "@/app/games/games-list/lib/actions";
import {checkFavorite} from "@/app/games/games-list/lib/checkFavorite";
import SearchParametersBar from "@/components/search-parameters-bar";

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
  
  const isAuthenticated = await checkAuth()
  const favoriteGames = await getFavoriteGames()
  
  return (
    <>
      <Stack direction='column' mb={3}>
        <Typography component="h4" variant="h4">
          {search && search.length > 0 ? search : 'All games'}
        </Typography>
        
        <Typography component="h6" variant="subtitle1" color="textSecondary">
          {games?.count} items
        </Typography>
      </Stack>
      
      <Stack direction="row" spacing={4}>
        <SearchParametersBar/>
        
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
                  short_screenshots={game.short_screenshots}
                  isAuthenticated={isAuthenticated}
                  isFavorite={favoriteGames ? checkFavorite(favoriteGames, game.id) : false}
                />
              </Suspense>
            </Grid>
          ))
          }
        </Grid>
      </Stack>
      
      <Pagination itemsCount={games?.count} defaultPage={page} />
    </>
  )
}