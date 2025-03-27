'use client'

import {Button} from "@mui/material";
import {addGameToPurchasedList} from "@/app/games/[id]/game-actions-buttons/lib/actions";
import {useState} from "react";

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
  
  const handleOnClick = async () => {
    setIsLoading(true);
    await addGameToPurchasedList({gameId, gameName: gameName, gameImage: gameImage})
    setIsLoading(false);
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