'use client'

import ReactPlayer from 'react-player/lazy'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {Box, IconButton, Skeleton} from "@mui/material";

interface IGameMovieProps{
  previewImage:string;
  movieURL:string;
}

export default function GameMovie({previewImage, movieURL}: IGameMovieProps){
  return (
    <Box
      borderRadius={2}
      sx={{
        position: 'relative',
        width: '340px',
        height: '200px',
        backgroundColor: '#000',
      }}
    >
    <ReactPlayer
      height='200px'
      width='340px'
      light={
      <Box
        component='img'
        src={previewImage}
        alt='Thumbnail'
        width={340}
        height={200}
        sx={{ objectFit: 'cover' }}
      />}
      controls={true}
      playIcon={
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
        >
          <IconButton>
            <PlayArrowIcon sx={{ fontSize: 50, color: 'white' }} />
          </IconButton>
        </Box>}
      url={movieURL}
      fallback={<Skeleton variant="rectangular" width={340} height={200} />}
    />
    </Box>
  )
}