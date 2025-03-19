'use client'

import {Chip, Stack, Typography} from "@mui/material";
import {IGenre, IPlatform} from "@/api/types";
import PlatformBadge from "@/components/games-list/ui/PlatformBadge";

interface IGameInfoProps {
  name?: string;
  platforms?: IPlatform[];
  description?: string;
  genres?: IGenre[];
}

export const GameInfo = (
  { name,
    platforms,
    description,
    genres
  }: IGameInfoProps) => {
  return (
    <>
      <Stack>
        <Typography variant="h2" component="h2" fontWeight={'bold'} mb={1}>
          {name}
        </Typography>
        
        <Stack spacing={2} direction="row" sx={{ flexGrow: 1 }}>
          {platforms && platforms.length > 0 && platforms.map((platform) => (
            <PlatformBadge platformName={platform.platform.name} key={platform.platform.id}/>
          ))}
        </Stack>
        
        <Stack spacing={1} direction="row" sx={{ flexGrow: 1 }}>
          {genres && genres.length > 0 && genres.map((genre: IGenre) => (
            <Chip label={genre.name} key={genre.id}/>
          ))}
        </Stack>
        
        <Typography variant="h5" component="h5" mb={1}>
          About
        </Typography>
        
        <Typography variant="body1" component="p" mb={1} color={'textSecondary'}>
          {description}
        </Typography>
      </Stack>
    </>
  )
}