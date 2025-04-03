'use client'

import {Box, IconButton, SxProps} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {addGameToPurchasedList, removeGameFromPurchasedList} from "@/app/games/[id]/game-actions-buttons/lib/actions";
import {useState} from "react";

interface IFavoriteButtonProps {
  isFavorite: boolean;
  gameId: number;
  gameName: string;
  gameImage: string;
  sx?: SxProps;
}

export default function FavoriteButton({ isFavorite, gameId, gameName, gameImage,sx }: IFavoriteButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    
    setIsLoading(true)
    if (isFavorite) {
      await removeGameFromPurchasedList(gameId);
    }else{
      await addGameToPurchasedList({
        gameId,
        gameName,
        gameImage
      })
    }
    
    setIsLoading(false);
  }
  
  return (
    <Box sx={{
      borderRadius: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: 'fit-content',
      height: 'fit-content',
      ...sx
    }
      }>
      <IconButton aria-label="add to favorites" loading={isLoading} onClick={handleOnClick}>
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Box>
  )
}