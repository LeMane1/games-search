import Link from "next/link";
import {Box, Typography} from "@mui/material";

export default function MainPageSelectButton(){
  return (
    <Link href="/games">
      <Box
        borderRadius={4}
        boxShadow={6}
        alignItems="end"
        sx={{
          display: "flex",
          width: '100%',
          height: 220,
          backgroundColor: '#252525',
          backgroundImage: 'url(/images/image_search_games.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          padding: 3
      }}>
          <Typography variant="h4" component="h4" fontWeight={'bolder'} letterSpacing={1.2}>
            Games search
          </Typography>
      </Box>
    </Link>
  )
}