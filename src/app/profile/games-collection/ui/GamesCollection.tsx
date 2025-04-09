import {CircularProgress, Stack, Typography} from "@mui/material";
import {getGamesCollection} from "@/app/profile/games-collection/lib/actions";
import GameCard from "@/app/profile/games-collection/ui/GameCard";
import {Grid} from "@mui/system";
import {Suspense} from "react";

export default async function GamesCollection(){
  const games = await getGamesCollection()
  
  return (
    <Stack direction='column' spacing={3} pb={4}>
      <Typography variant="h3" component='h3'>
        Favorite games
      </Typography>
      
      <Grid container spacing={2} my={3}>
        {
          games && games.length > 0 ?
            games && games.map((game) => (
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={game.gameId}>
                <Suspense fallback={<CircularProgress/>}>
                  <GameCard
                    gameName={game.gameName}
                    gameId={game.gameId}
                    gameImage={game.gameImage}
                  />
                </Suspense>
              </Grid>
            ))
            :
            <Typography variant="h6" component="span" color="textSecondary">
              No games found
            </Typography>
        }
      </Grid>
    </Stack>
  )
}