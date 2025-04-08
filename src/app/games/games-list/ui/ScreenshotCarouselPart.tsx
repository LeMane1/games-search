'use client'

import {Box} from "@mui/material";

interface IScreenshotCarouselProps {
  onClick: (screenshotId: number) => void;
  screenshotId: number;
  isSelected: boolean;
}

export default function ScreenshotCarouselPart({onClick, screenshotId, isSelected}: IScreenshotCarouselProps) {
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick(screenshotId)
  }
  
  return (
    <Box
      onClick={handleOnClick}
      sx={{
        flex: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        '&:hover > :first-child':{
          opacity: isSelected ? 1 : 0.6,
          transition: 'all .2s ease-in-out',
        }
    }}>
      <Box
        height={4}
        width={'100%'}
        sx={{
          backgroundColor: 'white',
          opacity: isSelected ? 1 : 0.4,
          transition: 'all .2s ease-in-out',
        }}/>
    </Box>
  )
}