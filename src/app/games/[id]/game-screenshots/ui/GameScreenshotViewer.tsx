'use client'

import {Box, Dialog, IconButton, Stack} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {IGameScreenshot} from "@/api/types";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {changeCurrentScreenshotId, changeModalState} from "@/lib/features/mainSlice";
import {RootState} from "@/lib/store";

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
        }
        currentIndex--
      }else if (direction === 'right' && currentIndex !== undefined) {
        if (currentIndex === screenshotsLength - 1){
          currentIndex = 0
        }
        currentIndex++
      }
      
      const nextImage = screenshots[currentIndex].id;
      dispatch(changeCurrentScreenshotId(nextImage))
    }
  }
  
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      maxWidth="xl"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      {currentScreenshotId && (
        <Stack
          sx={{
            position: 'relative',
            maxHeight: '90vh',
            maxWidth: '90vw',
          }}
        >
          <Box
            component='img'
            src={screenshots?.find(result => result.id === currentScreenshotId)?.image || ''}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
          </Box>
          
          <Stack
            alignItems='center'
            sx={{
              position: 'absolute',
              bottom: 12,
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
              <IconButton aria-label="right" onClick={() => changeCurrentImage('left')}>
                <KeyboardArrowRightIcon/>
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Dialog>
  )
}