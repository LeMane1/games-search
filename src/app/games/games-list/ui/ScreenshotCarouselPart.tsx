'use client'

import {Box} from "@mui/material";

interface IScreenshotCarouselProps {
  onMouseEnter: (screenshotId: number) => void;
  screenshotId: number;
  isSelected: boolean;
}

export default function ScreenshotCarouselPart({onMouseEnter, screenshotId, isSelected}: IScreenshotCarouselProps) {
  const handleOnMouseEnter = () => {
    onMouseEnter(screenshotId)
  }
  
  return (
    <Box
      onMouseEnter={handleOnMouseEnter}
      sx={{
        flex: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
    }}>
      <Box height={4} width={'100%'}
           sx={{
             backgroundColor: 'white',
             opacity: isSelected ? 1 : 0.4
           }}
      />
    </Box>
  )
}