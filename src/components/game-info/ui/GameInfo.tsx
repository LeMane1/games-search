'use client'

import {Button, Chip, Stack, Typography} from "@mui/material";
import {IGenre, IPlatform, IStore} from "@/api/types";
import PlatformBadge from "@/components/games-list/ui/PlatformBadge";
import Image from 'next/image'
import {BuyPlatformLink} from "@/components/buy-platform-link";

interface IGameInfoProps {
  name?: string;
  platforms?: IPlatform[];
  description?: string;
  genres?: IGenre[];
  stores?: IStore[];
}

export const GameInfo = (
  { name,
    platforms,
    description,
    genres,
    stores
  }: IGameInfoProps) => {
  return (
    <>
      <Stack>
        <Typography
          variant="h2"
          component="h2"
          fontWeight={'bold'}
          mb={1}
          lineHeight={1}
        >
          {name}
        </Typography>
        
        <Stack spacing={2} direction="row" sx={{ flexGrow: 1 }} mb={2}>
          {platforms && platforms.length > 0 && platforms.map((platform) => (
            <PlatformBadge platformName={platform.platform.name} key={platform.platform.id}/>
          ))}
        </Stack>
        
        <Stack spacing={1} direction="row" sx={{ flexGrow: 1 }} mb={3}>
          {genres && genres.length > 0 && genres.map((genre: IGenre) => (
            <Chip label={genre.name} key={genre.id}/>
          ))}
        </Stack>
        
        <Typography variant="h5" component="h5" mb={1}>
          About
        </Typography>
        
        <Typography variant="body1" component="p" mb={3} color={'textSecondary'}>
          {description}
        </Typography>
        
        <Typography variant="h5" component="h5" mb={1}>
          Where to buy
        </Typography>
        
        <Stack spacing={1} direction="row" sx={{ flexGrow: 1 }}>
          {stores && stores.length > 0 && stores.map((store: IStore) => (
            <BuyPlatformLink
              key={store.id}
              name={store.store.name}
              slug={store.store.slug}
              domain={store.store.domain}
            />
          ))}
        </Stack>
      </Stack>
    </>
  )
}