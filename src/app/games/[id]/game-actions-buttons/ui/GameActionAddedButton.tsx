'use client'

import {Box, CircularProgress, IconButton, Typography} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import {removeGameFromPurchasedList} from "@/app/games/[id]/game-actions-buttons/lib/actions";
import {useState} from "react";

interface IGameActionAddedButtonProps {
  gameId: number;
}

export default function GameActionAddedButton({gameId}: IGameActionAddedButtonProps){
  const [isLoading, setIsLoading] = useState(false);
  
  const handleOnClick = async () => {
    setIsLoading(true);
    await removeGameFromPurchasedList(gameId)
    setIsLoading(false);
  }
  
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      width="100%"
      borderRadius={2}
      px={2}
      py={1}
      height={50}
      position='relative'
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        '&:hover > [data-id="removeGameButton"]': {
          opacity: 1,
          visibility: 'visible',
          transform: 'scale(1)',
        }
      }}
    >
      {
        isLoading ?
          <CircularProgress color={'secondary'} size={20}/>
          :
          <>
            <Typography
              variant='subtitle1'
              component='span'
              fontWeight='bold'
              color='primary.main'
            >
              You owned this game
            </Typography>
            <IconButton
              color="secondary"
              data-id={'removeGameButton'}
              onClick={handleOnClick}
              sx={{
                position: 'absolute',
                right: 16,
                opacity: 0,
                visibility: 'hidden',
                transform: 'scale(0)',
                transition: 'all 0.3s ease',
              }}
            >
              <CancelIcon />
            </IconButton>
          </>
      }
    </Box>
  )
}