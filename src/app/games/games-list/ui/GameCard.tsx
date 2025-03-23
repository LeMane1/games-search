import {IGame, IPlatform, IGenre} from "@/api/types";
import {Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import PlatformBadge from "@/app/games/games-list/ui/PlatformBadge";
import {RatingBadge} from "./RatingBadge";
import Link from "next/link";

type IGameCardProps = Pick<IGame, 'id' | 'name' | 'background_image' | 'platforms' | 'metacritic' | 'genres' | 'released'>

export default function GameCard(
  { id,
    name,
    background_image,
    platforms,
    metacritic,
    genres,
    released,
  }:IGameCardProps){
  
  return (
    <Link href={`/games/${id}`} passHref>
      <Card sx={{ width: '100%', position: 'relative' }}>
        {metacritic && <RatingBadge ratingValue={metacritic} />}
        <CardActionArea >
          <CardMedia
            loading={'lazy'}
            component="img"
            image={background_image ?? 'images/image_placeholder.png'}
            alt={name}
            sx={{ height: {
                xs: 180,
                sm: 220,
                md: 260,
                lg: 300,
                xl: 340,
              },
              objectFit: 'cover',}}
          />
          <CardContent>
            <Typography variant="subtitle2" component="h6" color={'textSecondary'}>
              {new Date(released).getFullYear()}
            </Typography>
            
            <Typography gutterBottom variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            
            <Stack direction="row" mb={2} sx={{flexWrap: 'wrap', gap: 1}}>
              {genres && genres.length > 0 && genres.map((genre: IGenre) => (
                <Chip label={genre.name} key={genre.id}/>
              ))}
            </Stack>
            
            <Stack direction="row" spacing={1}>
              {platforms && platforms.map((platform: IPlatform) => (
                <PlatformBadge platformName={platform.platform.slug} key={platform.platform.id}/>
              ))}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}