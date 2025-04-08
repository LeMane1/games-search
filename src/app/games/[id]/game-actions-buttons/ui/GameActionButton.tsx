'use client'

import {Button} from "@mui/material";
import {addGameToPurchasedList} from "@/app/games/[id]/game-actions-buttons/lib/actions";
import {useState} from "react";
import {changeSnackMessage} from "@/lib/slices/mainSlice";
import {useAppDispatch} from "@/lib/hooks";

interface IGameActionButtonProps {
  gameId: number;
  gameName: string;
  gameImage: string;
}

export default function GameActionButton(
  {
    gameId,
    gameName,
    gameImage,
  }: IGameActionButtonProps
){
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  
  const handleOnClick = async () => {
    try{
      setIsLoading(true);
      await addGameToPurchasedList({gameId, gameName: gameName, gameImage: gameImage})
      dispatch(changeSnackMessage(`${gameName} was added to favorites`))
    }catch(e){
      console.error('Unexpected fail while add game to favorites', e);
      dispatch(changeSnackMessage('Something went wrong. Try again'));
    }finally{
      setIsLoading(false);
    }
  }
  
  return (
    <Button
      loading={isLoading}
      variant="outlined"
      color="secondary"
      onClick={() => handleOnClick()}>
      Add to favorites
    </Button>
  )
}