'use client'

import {Box, IconButton, Typography} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import {removeGameFromPurchasedList} from "@/app/games/[id]/game-actions-buttons/lib/actions";

interface IGameActionAddedButtonProps {
  gameId: number;
}

export const GameActionAddedButton = ({gameId}: IGameActionAddedButtonProps) => {
  const handleOnClick = async () => {
    await removeGameFromPurchasedList(gameId)
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
    </Box>
  )
}