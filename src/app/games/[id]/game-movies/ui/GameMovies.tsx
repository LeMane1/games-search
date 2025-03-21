import {getData} from "@/api/getData";
import {IGameMovie, IGameMoviesResponse} from "@/api/types";
import GameMovie from "./GameMovie";
import {Stack, Typography} from "@mui/material";

interface IGameMoviesProps {
  gameId: number;
}

export default async function GameMovies({gameId}: IGameMoviesProps) {
  const moviesResponse = await getData<IGameMoviesResponse>({
    url: `games/${gameId}/movies`
  })
  const movies: IGameMovie[] = moviesResponse.results;
  
  return(
    <Stack
      direction="row"
      spacing={2}
      sx={{
        flexGrow: 1,
        overflowX: 'auto',
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