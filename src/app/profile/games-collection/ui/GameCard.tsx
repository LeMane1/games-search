import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from "@mui/material";
import Link from "next/link";

interface IGameCardProps {
  gameName: string;
  gameId: number;
  gameImage: string;
}

export default function GameCard({ gameName, gameId, gameImage }: IGameCardProps) {
  return (
    <Link href={`/games/${gameId}`} passHref>
      <Card sx={{ width: '100%'}}>
          <CardActionArea>
            <Stack direction='column' spacing={1}>
              <CardMedia
                loading='lazy'
                component="img"
                image={gameImage ?? 'images/image_placeholder.png'}
                alt={gameName}
                sx={{
                  height: 200,
                  objectFit: 'cover',}}
              />
              <CardContent>
                <Typography variant="h6" component="h6" sx={{ fontWeight: 'bold' }}>
                  {gameName}
                </Typography>
              </CardContent>
            </Stack>
          </CardActionArea>
      </Card>
    </Link>
  )
}