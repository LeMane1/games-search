'use client'

import {IGame, IPlatform} from "@/api/types";
import {Card, CardActionArea, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import PlatformBadge from "@/components/games-list/ui/PlatformBadge";
import {RatingBadge} from "@/components/rating-badge";

type IGameCardProps = Pick<IGame, 'id' | 'name' | 'background_image' | 'platforms' | 'metacritic'>

export const GameCard = (
  {id,
    name,
    background_image,
    platforms,
    metacritic,
  }:IGameCardProps) => {
  return (
    <Card sx={{ width: '100%', position: 'relative' }}>
      <RatingBadge ratingValue={metacritic} />
      <CardActionArea >
        <CardMedia
          component="img"
          image={background_image}
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
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Stack direction="row" spacing={1}>
            {platforms && platforms.map((platform: IPlatform) => (
              <PlatformBadge platformName={platform.platform.slug} key={platform.platform.id}/>
            ))}
          </Stack>
        </CardContent>
        {/*{id}*/}
      </CardActionArea>
    </Card>
  )
}