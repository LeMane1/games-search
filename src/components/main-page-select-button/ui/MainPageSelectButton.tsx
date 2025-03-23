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
          '&:hover': {
            opacity: 1,
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