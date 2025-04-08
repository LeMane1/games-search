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
import SearchParameters from "@/app/games/games-list/ui/SearchParameters";

interface IGamesListProps {
  search: string;
  ordering: string;
  page: number;
  parentPlatforms: string;
}

export default async function GamesList(
  {
    search,
    ordering,
    page,
    parentPlatforms
  }: IGamesListProps){
  
  const games: IGamesResponse = await getData<IGamesResponse>({
    url: '/games',
    searchParams: {
      search,
      ordering,
      page: page.toString(),
      parent_platforms: parentPlatforms,
      search_precise: 'true'
    },
  })
  
  const isAuthenticated = await checkAuth()
  const favoriteGames = await getFavoriteGames()
  
  return (
    <>
      <Stack direction='column' mb={{
        xs: 1,
        sm: 1,
        md: 3,
        lg: 3,
        xl: 3,
      }}>
        <Typography component="h4" variant="h4">
          {search && search.length > 0 ? search : 'All games'}
        </Typography>
        
        <Typography component="h6" variant="subtitle1" color="textSecondary">
          {games?.count} items
        </Typography>
      </Stack>
      
      <Stack direction="row" sx={{
        gap: 4
      }}>
        <SearchParameters/>
        
        <Stack direction="column" spacing={3}>
          <Grid container spacing={2}>
            {games && games?.results?.length > 0 ? games.results.map((game) => (
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
              :
              <Typography component="h6" variant="h6" color="textSecondary">
                No games found
              </Typography>
            }
          </Grid>
          
          <Pagination itemsCount={games?.count} defaultPage={page} />
        </Stack>
      </Stack>
    </>
  )
}