import {IGame, IPlatform, IGenre} from "@/api/types";
import {Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import PlatformBadge from "@/app/games/games-list/ui/PlatformBadge";
import {RatingBadge} from "./RatingBadge";
import Link from "next/link";
import ScreenshotsCarousel from "@/app/games/games-list/ui/ScreenshotsCarousel";
import FavoriteButton from "@/components/favorite-button";

type GameCard = Pick<IGame, 'id' | 'name' | 'background_image' | 'platforms' | 'metacritic' | 'genres' | 'released' | 'short_screenshots'>

interface IGameCardProps extends GameCard{
  isAuthenticated: boolean;
  isFavorite: boolean;
}

export default function GameCard(
  { id,
    name,
    background_image,
    platforms,
    metacritic,
    genres,
    released,
    short_screenshots,
    isAuthenticated,
    isFavorite,
  }:IGameCardProps){
  
  return (
    <Link href={`/games/${id}`} passHref>
      <Card sx={{
        width: '100%',
        position: 'relative',
        minHeight: '100%',
        height: '100%',
      }}>
        {isAuthenticated && <FavoriteButton
          isFavorite={isFavorite}
          gameName={name}
          gameImage={background_image}
          gameId={id}
          sx={{
            position: 'absolute',
            left: '6px',
            top: '6px',
            zIndex: 100
        }}/>}
        
        {metacritic && <RatingBadge ratingValue={metacritic} />}
        
        <CardActionArea sx={{
          height: '100%',
          minHeight: 'fit-content',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'flex-start',
          flexDirection: 'column'
        }}>
          {
            short_screenshots?.length > 0 ?
              <ScreenshotsCarousel
                screenshots={short_screenshots}
              />
              :
              <CardMedia
                loading={'lazy'}
                component="img"
                image={background_image || 'images/image_placeholder.png'}
                alt={name}
                sx={{
                  height: {
                    xs: 180,
                    sm: 220,
                    md: 260,
                    lg: 300,
                    xl: 340,
                  },
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
          }
          
          <CardContent>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            
            <Typography gutterBottom variant="subtitle2" component="h6" color={'textSecondary'}>
              {new Date(released).getFullYear()}
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