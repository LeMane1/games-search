'use client'

import {Box, Dialog, IconButton, Stack} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {IGameScreenshot} from "@/api/types";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {changeCurrentScreenshotId, changeModalState} from "@/lib/features/mainSlice";
import {RootState} from "@/lib/store";
import CloseIcon from '@mui/icons-material/Close';

interface IGameScreenshotViewerProps {
  screenshots: IGameScreenshot[];
}

export const GameScreenshotViewer = (
  {
    screenshots,
  }: IGameScreenshotViewerProps) => {
  const dispatch = useAppDispatch();
  const {currentScreenshotId, isModalOpen} = useAppSelector((state: RootState) => state.mainReducer)
  
  const handleClose = () => {
    dispatch(changeModalState())
    dispatch(changeCurrentScreenshotId(0))
  };
  
  const changeCurrentImage = (direction: 'left' | 'right') => {
    if (screenshots && screenshots.length > 0){
      let currentIndex = screenshots?.findIndex((element) => element.id === currentScreenshotId);
      const screenshotsLength: number = screenshots?.length
      
      if (direction === 'left' && currentIndex !== undefined) {
        if (currentIndex === 0){
          currentIndex = screenshotsLength - 1
        }else{
          currentIndex--
        }
      }else if (direction === 'right' && currentIndex !== undefined) {
        if (currentIndex === screenshotsLength - 1){
          console.log(currentIndex)
          currentIndex = 0
        }else{
          currentIndex++
        }
      }
      
      const nextImage = screenshots[currentIndex].id;
      dispatch(changeCurrentScreenshotId(nextImage))
    }
  }
  
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      fullScreen
      hideBackdrop
      sx={{
        '& .MuiDialog-paper': {
          backgroundImage: 'none',
          backgroundColor: 'rgba(0,0,0,0.9)',
          '--Paper-overlay': 'none !important'
        }
      }}
    >
      {currentScreenshotId && (
        <Stack
          sx={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            padding: {
              'xs': 0,
              'sm': 0,
              'md': 4,
              'lg': 5,
              'xl': 5,
            }
          }}
        >
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <Box
              component='img'
              src={screenshots?.find(result => result.id === currentScreenshotId)?.image || ''}
              sx={{
                width: '100%',
                height: 'fit-content',
                objectFit: 'cover'
              }}
            >
            </Box>
            
            <Box
              borderRadius={5}
              sx={{
                position: 'absolute',
                right: 12,
                top: 12,
                backgroundColor: '#252525'
              }}
            >
              <IconButton onClick={() => handleClose()}>
                <CloseIcon/>
              </IconButton>
            </Box>
            
            <Stack
              alignItems='center'
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 0,
                width: '100%',
              }}
            >
              <Stack
                direction='row'
                spacing={2}
                width='fit-content'
                borderRadius={5}
                sx={{
                  backgroundColor: '#252525',
                }}>
                <IconButton aria-label="left" onClick={() => changeCurrentImage('left')}>
                  <KeyboardArrowLeftIcon/>
                </IconButton>
                <IconButton aria-label="right" onClick={() => changeCurrentImage('right')}>
                  <KeyboardArrowRightIcon/>
                </IconButton>
              </Stack>
            </Stack>
          </Box>
          
          
          
          
          
        </Stack>
      )}
    </Dialog>
  )
}