import GameInfo from "src/app/games/[id]/game-info";
import {Box, Stack} from "@mui/material";
import BgOverlay from "@/components/bg-overlay";
import {IGameResponse} from "@/api/types";
import {getData} from "@/api/getData";

export default async function GamePage(props: {
  params?: Promise<{
    id?: string;
  }>;
}) {
  const params = await props.params;
  const gameId:string = params?.id || '';
  
  const game: IGameResponse = await getData<IGameResponse>({
    url: `games/${gameId}`
  })
  
  return (
    <>
      <BgOverlay imageName={game?.background_image}/>
      
      <Stack spacing={5} direction={{
        xs: 'column',
        sm: 'column',
        md: 'row',
        lg: 'row',
        xl: 'row'
      }}>
        <Box
          component="img"
          src={game?.background_image}
          alt="Game Image"
          boxShadow={5}
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: 300,
              lg: 300,
              xl: 300
            },
            height: 400,
            objectFit: 'cover',
            borderRadius: 2
          }}
        />
        
        <GameInfo
          id={game?.id}
          name={game?.name}
          platforms={game?.parent_platforms}
          description={game?.description_raw}
          genres={game?.genres}
          stores={game?.stores}
          rating={{
            metacritic: game?.metacritic,
            rawg: game?.rating
          }}
          developers={game?.developers}
          publishers={game?.publishers}
          release={game?.released}
          esrb={game?.esrb_rating?.name}
        />
      </Stack>
    </>
  )
}