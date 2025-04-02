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
  
  const handleOnMouseEnter = (screenshotId: number) => {
    setScreenshotId(screenshotId)
    const currentImage = screenshots.find(screenshot => screenshot.id === screenshotId)?.image
    setScreenshotImage(currentImage || screenshots[0].image)
  }
  
  return (
    <Box
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