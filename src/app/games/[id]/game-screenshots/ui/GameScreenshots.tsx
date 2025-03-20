'use client'

import {useGetGameScreenShotsByIdQuery} from "@/api/api";
import {IGameScreenshot} from "@/api/types";
import {Box, Dialog, IconButton, Skeleton, Stack} from "@mui/material";
import {Suspense, useState} from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { lazy } from 'react';

const GamePreviewScreenshot = lazy(() => import('./GamePreviewScreenshot'));

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
            <Suspense fallback={<Skeleton variant="rectangular" width={340} height={200} />} key={screenshot.id}>
              <GamePreviewScreenshot
                image={screenshot.image}
                id={screenshot.id}
                onClick={handleOpen}
              />
            </Suspense>
          ))
        }
      </Box>
      
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
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
    </>
  )}