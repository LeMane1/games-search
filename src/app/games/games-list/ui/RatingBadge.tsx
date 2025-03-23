'use client'

import {Box, Typography} from '@mui/material'

interface IRatingBadgeProps {
  ratingValue: number;
}

export const RatingBadge = ({ratingValue}: IRatingBadgeProps) => {
  return (
    <Box
      px={1}
      py={0.5}
      borderRadius={2}
      boxShadow={4}
      sx={{
        position: 'absolute',
        right: '10px',
        top: '10px',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        backdropFilter: 'blur(4px)',
      }}
    >
      <Typography
        variant='h5'
        component='h5'
        sx={{fontWeight: 'bolder'}}
      >
        {ratingValue}
      </Typography>
    </Box>
  )
}