import {Box, Container, Typography} from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(23, 23, 23, 0.5)',
      }}>
      <Container
        maxWidth="lg"
        sx={{
          height: 100,
          padding: 2,
      }}>
        <Image src={'/icons/icon_logo.svg'} alt='Logo' width={80} height={30} />
        
        <Typography component="h6" variant="subtitle1" color={'textSecondary'}>
          Game Searcher, 2025
        </Typography>
      </Container>
    </Box>
  )
}