'use client'

import {Box} from "@mui/material";

interface IGamePreviewScreenshotProps {
  image: string;
  onClick: (id: number) => void;
  id: number;
}

export default function GamePreviewScreenshot ({image, onClick, id}: IGamePreviewScreenshotProps){
  return (
    <>
      <Box
        component="img"
        src={image}
        width={340}
        height={200}
        borderRadius={2}
        onClick={() => onClick(id)}
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