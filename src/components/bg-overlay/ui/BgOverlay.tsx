import {Box} from "@mui/material";

interface IBgOverlayProps {
  imageName?: string;
}

export default function BgOverlay({imageName}: IBgOverlayProps) {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          backgroundImage: `
            linear-gradient(0deg, rgba(37,37,37,1) 0%, rgba(37,37,37,1) 26%, rgba(0,212,255,0) 100%),
            url(${imageName})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(24px)',
          '::after': {
            content: '""',
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(37, 37, 37, 0.4)',
          }
        }}
      />
    </>
  )
}