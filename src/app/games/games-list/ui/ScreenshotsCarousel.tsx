'use client'

import {Box, CardMedia, Stack} from "@mui/material";
import {IShortScreenshot} from "@/api/types";
import ScreenshotCarouselPart from "@/app/games/games-list/ui/ScreenshotCarouselPart";
import {useState} from "react";

interface IScreenshotsCarouselProps {
  screenshots: IShortScreenshot[];
}

export default function ScreenshotsCarousel({screenshots}: IScreenshotsCarouselProps) {
  const [screenshotId, setScreenshotId] = useState(screenshots[0].id)
  const [screenshotImage, setScreenshotImage] = useState(screenshots[0].image)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  const handleOnMouseEnter = (screenshotId: number) => {
    setScreenshotId(screenshotId)
    const currentImage = screenshots.find(screenshot => screenshot.id === screenshotId)?.image
    setScreenshotImage(currentImage || screenshots[0].image)
  }
  
  const updateScreenshot = (id: number) => {
    setScreenshotId(id);
    const currentImage = screenshots.find(screenshot => screenshot.id === id)?.image;
    setScreenshotImage(currentImage || screenshots[0].image);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const difference = touchStart - touchEnd;
    const threshold = 50;
    
    if (difference > threshold) {
      const currentIndex = screenshots.findIndex(s => s.id === screenshotId);
      const nextIndex = (currentIndex + 1) % screenshots.length;
      updateScreenshot(screenshots[nextIndex].id);
    } else if (difference < -threshold) {
      const currentIndex = screenshots.findIndex(s => s.id === screenshotId);
      const prevIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
      updateScreenshot(screenshots[prevIndex].id);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };
  
  return (
    <Box
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      sx={{
        width: '100%',
        height: {
          xs: 180,
          sm: 220,
          md: 260,
          lg: 300,
          xl: 340,
        },
        position: 'relative',
    }}>
      <Stack
        direction='row'
        spacing={1}
        py={1}
        px={2}
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
      }}>
        {
          screenshots.map((screenshot => (
            <ScreenshotCarouselPart
              key={screenshot.id}
              screenshotId={screenshot.id}
              isSelected={screenshot.id === screenshotId}
              onMouseEnter={handleOnMouseEnter}
            />
          )))
        }
      </Stack>
      
      <CardMedia
        loading={'lazy'}
        component="img"
        image={screenshotImage || 'images/image_placeholder.png'}
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  )
}