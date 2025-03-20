'use client'

import {Chip, Stack, Typography} from "@mui/material";
import {IDeveloper, IGenre, IPlatform, IPublisher, IStore} from "@/api/types";
import PlatformBadge from "@/components/games-list/ui/PlatformBadge";
import {BuyPlatformLink} from "@/components/buy-platform-link";
import RatingBadge from "@/components/rating-badge";
import GameParameters from "@/app/games/[id]/game-parameters";
import {getParameters} from "@/app/games/[id]/lib/getParameters";

interface IGameInfoProps {
  name?: string;
  platforms?: IPlatform[];
  description?: string;
  genres?: IGenre[];
  stores?: IStore[];
  rating:{
    metacritic?: number;
    rawg?: number;
  },
  developers?: IDeveloper[];
  publishers?: IPublisher[];
  release: string;
  esrb?: string;
}

export const GameInfo = (
  { name,
    platforms,
    description,
    genres,
    stores,
    rating,
    developers,
    publishers,
    release,
    esrb
  }: IGameInfoProps) => {
  return (
    <Stack>
      <Typography
        variant='h2'
        component="h2"
        fontWeight={'bold'}
        mb={1}
        lineHeight={1}
        sx={{
          fontSize: {
            xs: '2rem',
            sm: '2.5rem',
            md: '3rem',
            lg: '3rem',
            xl: '3.5rem'
          }
        }}
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
      
      <Stack mb={3} direction="row" sx={{ flexGrow: 1, gap: 2, flexWrap: "wrap" }}>
        {
          rating?.metacritic && <RatingBadge
            icon={'/icons/icon_metacritic_logo.svg'}
            alt="Metacritic Logo"
            width={80}
            height={20}
            ratingValue={rating?.metacritic}
          />
        }
        
        {
          rating?.rawg && <RatingBadge
            icon={'/icons/icon_rawg_logo.webp'}
            alt="Rawg Logo"
            width={50}
            height={20}
            ratingValue={rating?.rawg}
          />
        }
      </Stack>
      
      <Typography variant="h5" component="h5" mb={1}>
        About
      </Typography>
      
      <Typography variant="body1" component="p" mb={3} color={'textSecondary'}>
        {description}
      </Typography>
      
      <Typography variant="h5" component="h5" mb={1}>
        Info
      </Typography>
      
      <GameParameters parameters={getParameters({
        developers,
        publishers,
        release,
        esrb
      })}/>
      
      <Typography variant="h5" component="h5" mb={1}>
        Where to buy
      </Typography>
      
      <Stack direction="row" sx={{ flexGrow: 1, flexWrap: 'wrap', gap: 1 }}>
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
  )
}