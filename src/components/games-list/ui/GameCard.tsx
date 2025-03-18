'use client'

import {IGame, IPlatform} from "@/api/types";
import {Card, CardActionArea, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import PlatformBadge from "@/components/games-list/ui/PlatformBadge";

type IGameCardProps = Pick<IGame, 'id' | 'name' | 'background_image' | 'platforms'>

export const GameCard = (
  {id,
    name,
    background_image,
    platforms,
  }:IGameCardProps) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={background_image}
          alt="green iguana"
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
      </CardActionArea>
    </Card>
  )
}