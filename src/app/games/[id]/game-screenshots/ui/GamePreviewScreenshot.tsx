'use client'

import {Box} from "@mui/material";

interface IGamePreviewScreenshotProps {
  image: string;
}

export const GamePreviewScreenshot = ({image}: IGamePreviewScreenshotProps) => {
  return (
    <>
      <Box
        component="img"
        src={image}
        width={340}
        height={200}
        borderRadius={2}
        sx={{
          objectFit: 'cover',
          ":hover":{
            cursor: 'pointer',
          }
        }}
      />
    </>
  )
}