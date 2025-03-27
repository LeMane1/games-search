import {Stack} from "@mui/material";
import {checkGameOwn} from "@/app/games/[id]/game-actions-buttons/lib/actions";
import {IGameResponse} from "@/api/types";
import {getData} from "@/api/getData";
import GameActionAddedButton from "@/app/games/[id]/game-actions-buttons/ui/GameActionAddedButton";
import GameActionButton from "@/app/games/[id]/game-actions-buttons/ui/GameActionButton";

interface IGameActionButtonsProps {
  gameId: number;
}

export default async function GameActionButtons({gameId}: IGameActionButtonsProps){
  const isGameOwned = await checkGameOwn(gameId);
  
  const game: IGameResponse = await getData<IGameResponse>({
    url: `games/${gameId}`
  })
  
  return (
    <Stack spacing={2} direction='column'>
      {
        isGameOwned ?
          <GameActionAddedButton gameId={gameId}/>
          :
          <GameActionButton
            gameId={gameId}
            gameName={game.name}
            gameImage={game.background_image}
          />
      }
    </Stack>
  )
}