import {Button, Stack} from "@mui/material";
import {addGameToPurchasedList, checkGameOwn} from "@/app/games/[id]/game-actions-buttons/lib/actions";
import {IGameResponse} from "@/api/types";
import {getData} from "@/api/getData";
import {GameActionAddedButton} from "@/app/games/[id]/game-actions-buttons/ui/GameActionAddedButton";

interface IGameActionButtonsProps {
  gameId: number;
}

export default async function GameActionButtons({gameId}: IGameActionButtonsProps){
  const isGameOwned = await checkGameOwn(gameId);
  
  const handleOnClick = async () => {
    'use server'
    
    const game: IGameResponse = await getData<IGameResponse>({
      url: `games/${gameId}`
    })
    
    await addGameToPurchasedList({gameId, gameName: game.name, gameImage: game.background_image})
  }
  
  return (
    <Stack spacing={2} direction='column'>
      {
        isGameOwned ?
          <GameActionAddedButton gameId={gameId}/>
          :
          <Button variant="outlined" color="secondary" onClick={handleOnClick}>
            Already have a game
          </Button>
      }
      
      
      {/*<Button variant="outlined" color="secondary">*/}
      {/*  Add to wishlist*/}
      {/*</Button>*/}
    </Stack>
  )
}