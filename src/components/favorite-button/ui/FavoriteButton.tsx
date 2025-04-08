'use client'

import {Box, IconButton, SxProps} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {addGameToPurchasedList, removeGameFromPurchasedList} from "@/app/games/[id]/game-actions-buttons/lib/actions";
import {useState} from "react";
import {useAppDispatch} from "@/lib/hooks";
import {changeSnackMessage} from "@/lib/slices/mainSlice";

interface IFavoriteButtonProps {
  isFavorite: boolean;
  gameId: number;
  gameName: string;
  gameImage: string;
  sx?: SxProps;
}

export default function FavoriteButton({ isFavorite, gameId, gameName, gameImage,sx }: IFavoriteButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    
    try{
      setIsLoading(true)
      
      if (isFavorite) {
        await removeGameFromPurchasedList(gameId);
        dispatch(changeSnackMessage(`${gameName} was removed from favorites`))
      }else{
        await addGameToPurchasedList({
          gameId,
          gameName,
          gameImage
        })
        dispatch(changeSnackMessage(`${gameName} was added to favorites`))
      }
      
    }catch(e){
      console.error('Unexpected fail while add/remove game to favorites', e);
      dispatch(changeSnackMessage('Something went wrong. Try again'));
    }finally {
      setIsLoading(false);
    }
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