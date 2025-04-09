import Link from "next/link";
import {Box, Typography} from "@mui/material";

interface IMainPageSelectButtonProps {
  buttonText: string;
  image: string;
  link: string;
}

export default function MainPageSelectButton({buttonText, image, link}: IMainPageSelectButtonProps) {
  return (
    <Link href={link}>
      <Box
        component='div'
        borderRadius={2}
        padding={2}
        boxShadow={6}
        alignItems="end"
        sx={{
        position: 'relative',
        display: "flex",
        width: '100%',
        height: 220,
        backgroundColor: '#252525',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        overflow: 'hidden',
        opacity: 0.8,
        transition: 'opacity .3s ease-in-out',
        '&:hover': {
          opacity: 1,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-75%',
          width: '50%',
          height: '100%',
          background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
          transform: 'skewX(-25deg)',
          opacity: 1,
          pointerEvents: 'none',
          transition: 'all 0.5s ease-out',
          transitionDelay: '0.4s',
        },
        '&:hover::before': {
          animation: 'shine 0.6s ease-in-out 0.3s forwards',
        },
        '@keyframes shine': {
          '0%': {
            left: '-100%',
            opacity: 0,
          },
          '30%': {
            opacity: 1,
          },
          '100%': {
            left: '120%',
            opacity: 0,
          }
        }
      }}>
          <Box
            component='div'
            py={1}
            px={3}
            borderRadius={2}
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden',
            }}
          >
            <Typography variant="h5" component="h5" fontWeight={'bold'} letterSpacing={1.2} color={'white'}>
              {buttonText}
            </Typography>
          </Box>
      </Box>
    </Link>
  )
}