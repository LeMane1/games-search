'use client'

import {Box, Typography} from '@mui/material'
import Image from 'next/image'

interface IRatingBadgeProps {
  ratingValue: number;
}

export const RatingBadge = ({ratingValue}: IRatingBadgeProps) => {
  return (
    <Box
      padding={1}
      borderRadius={2}
      boxShadow={3}
      sx={{
      position: 'absolute',
      right: '10px',
      top: '10px',
      zIndex: 1000,
      backgroundColor: 'rgba(234,234,234,0.7)',
      display: 'flex',
      alignItems: 'center',
      backdropFilter: 'blur(4px)',
      }}
    >
      <Image src={'/icons/icon_metacritic_logo.svg'} alt='Metacritic Logo' width='100' height='20'/>
      <Box width={4}/>
      <Typography variant='h5' sx={{fontWeight: 'bold'}} color={'black'}>{ratingValue}</Typography>
    </Box>
  )
}