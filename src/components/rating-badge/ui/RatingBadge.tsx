import Image from "next/image";
import {Box, Typography} from "@mui/material";

interface IRatingBadgeProps {
  width: number;
  height: number;
  icon: string;
  alt: string;
  ratingValue: number;
}

export default function RatingBadge(
  {
    width,
    height,
    icon,
    alt,
    ratingValue,
  }:IRatingBadgeProps){
  return (
    <Box
      borderRadius={5}
      px={2}
      py={0.5}
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}>
      <Image src={icon} alt={alt} width={width} height={height}/>
      <Typography
        variant='h5'
        component={'h5'}
        color={'black'}
        fontWeight={'bolder'}
      >
        {ratingValue}
      </Typography>
    </Box>
  )
}