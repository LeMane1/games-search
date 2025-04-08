'use client'

import {Box, CircularProgress, IconButton, Stack, SvgIcon, Typography} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import {removeGameFromPurchasedList} from "@/app/games/[id]/game-actions-buttons/lib/actions";
import {useState} from "react";
import CheckIcon from '@mui/icons-material/Check';
import {changeSnackMessage} from "@/lib/slices/mainSlice";
import {useAppDispatch} from "@/lib/hooks";

interface IGameActionAddedButtonProps {
  gameId: number;
  gameName: string;
}

export default function GameActionAddedButton({gameId, gameName}: IGameActionAddedButtonProps){
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  
  const handleOnClick = async () => {
    try{
      setIsLoading(true);
      await removeGameFromPurchasedList(gameId)
      dispatch(changeSnackMessage(`${gameName} was removed from favorites`))
    }catch(e){
      console.error('Unexpected fail while remove game to favorites', e);
      dispatch(changeSnackMessage('Something went wrong. Try again'));
    }finally{
      setIsLoading(false);
    }
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
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='center'
              spacing={1}
            >
              <SvgIcon color={'primary'}>
                <CheckIcon/>
              </SvgIcon>
              
              <Typography
                variant='subtitle1'
                component='span'
                fontWeight='bold'
              >
                Added to favorites
              </Typography>
            </Stack>
            
            <IconButton
              color="secondary"
              data-id={'removeGameButton'}
              onClick={handleOnClick}
              sx={{
                position: 'absolute',
                right: 6,
                zIndex: 10,
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