import {IGameMovie} from "@/api/types";
import GameMovie from "./GameMovie";
import {Stack, Typography} from "@mui/material";
import {getMovies} from "@/app/games/[id]/game-movies/lib/getMovies";

interface IGameMoviesProps {
  gameId: number;
}

export default async function GameMovies({gameId}: IGameMoviesProps) {
  const movies = await getMovies(gameId);
  
  return(
    <Stack
      direction="row"
      spacing={2}
      sx={{
        flexGrow: 1,
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      {
        movies && movies.length > 0 ?
          movies.map((movie: IGameMovie) => (
            <GameMovie key={movie.id} previewImage={movie.preview} movieURL={movie.data["480"]}/>
          ))
          :
          <Typography variant='h6' component='h6' color={'textSecondary'}>
            No movies available
          </Typography>
      }
    </Stack>
  )
}