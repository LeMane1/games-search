'use client'

import {useGetGameScreenShotsByIdQuery} from "@/api/api";
import {GamePreviewScreenshot} from "@/app/games/[id]/game-screenshots/ui/GamePreviewScreenshot";
import {IGameScreenshot} from "@/api/types";
import {Box, Dialog, IconButton, Stack} from "@mui/material";
import {useState} from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface IGameScreenshotsProps {
  gameId: number;
}

export const GameScreenshots = ({gameId}: IGameScreenshotsProps) => {
  const {data: screenshots} = useGetGameScreenShotsByIdQuery(gameId)
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const handleOpen = (id: number) => {
    setSelectedImage(id);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };
  
  const changeCurrentImage = (direction: 'left' | 'right') => {
    if (screenshots && screenshots.results.length > 0){
      let currentIndex = screenshots?.results.findIndex((element) => element.id === selectedImage);
      const screenshotsLength: number = screenshots?.results?.length
      
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
      
      const nextImage = screenshots.results[currentIndex].id;
      setSelectedImage(nextImage);
    }
  }
  
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          width: '100%',
          minWidth: 0,
          maxWidth: '100%',
          overflow: 'auto',
          whiteSpace: 'nowrap',
          paddingBottom: 2,
        }}
      >
        {
          screenshots && screenshots?.results.length > 0 && screenshots.results.map((screenshot: IGameScreenshot) => (
            <GamePreviewScreenshot
              key={screenshot.id}
              image={screenshot.image}
              id={screenshot.id}
              onClick={handleOpen}
            />
          ))
        }
      </Box>
      
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
      >
        {selectedImage && (
          <Stack
            sx={{
              position: 'relative',
              maxHeight: '90vh',
              maxWidth: '90vw',
            }}
          >
            <Box
              component='img'
              src={screenshots?.results.find(result => result.id === selectedImage)?.image || ''}
              sx={{
                // overflow: 'hidden',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            >
            </Box>
            
            <Stack
              direction='row'
              spacing={2}
              justifyContent='center'
              sx={{
                position: 'absolute',
                bottom: 12,
                left: 0,
                width: '100%'
              }}
            >
              <IconButton aria-label="left" onClick={() => changeCurrentImage('left')}>
                <KeyboardArrowLeftIcon/>
              </IconButton>
              <IconButton aria-label="right" onClick={() => changeCurrentImage('left')}>
                <KeyboardArrowRightIcon/>
              </IconButton>
            </Stack>
          </Stack>
        )}
      </Dialog>
    </>
  )}