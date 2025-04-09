import {Box, Chip, Stack, Typography} from "@mui/material";
import {IDeveloper, IGenre, IPlatform, IPublisher, IStore} from "@/api/types";
import PlatformBadge from "@/app/games/games-list/ui/PlatformBadge";
import RatingBadge from "@/components/rating-badge";
import GameParameters from "@/app/games/[id]/game-parameters";
import {getParameters} from "@/app/games/[id]/lib/getParameters";
import GameScreenshots from "@/app/games/[id]/game-screenshots";
import GameStores from "@/app/games/[id]/game-info/ui/GameStores";
import GameMovies from "@/app/games/[id]/game-movies";
import GameAchievements from "@/app/games/[id]/game-achievements";
import GameSystemRequirements from "@/app/games/[id]/game-system-requirements";
import GameInfoBlockHeader from "@/app/games/[id]/ui/GameInfoBlockHeader";
import GameComments from "@/app/games/[id]/game-comments";
import {Suspense} from "react";

interface IGameInfoProps {
  id: number;
  name?: string;
  parentPlatforms: IPlatform[];
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
  playtime?: number;
}

export default function GameInfo(
  { id,
    name,
    parentPlatforms,
    platforms,
    description,
    genres,
    stores,
    rating,
    developers,
    publishers,
    release,
    esrb,
    playtime
  }: IGameInfoProps){
  return (
    <Stack
      width="100%"
      direction="column"
      sx={{
        flexBasis: 0,
        flexGrow: 1,
        minWidth: 0
      }}
    >
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
        {parentPlatforms && parentPlatforms.length > 0 && parentPlatforms.map((platform) => (
          <PlatformBadge platformName={platform.platform.slug} key={platform.platform.id}/>
        ))}
      </Stack>
      
      <Stack direction="row" sx={{ flexGrow: 1, flexWrap: 'wrap', gap: 1 }} mb={3}>
        {genres && genres.length > 0 && genres.map((genre: IGenre) => (
          <Chip label={genre.name} key={genre.id}/>
        ))}
      </Stack>
      
      <Stack mb={3} direction="row" sx={{ flexGrow: 1, gap: 2, flexWrap: "wrap" }}>
        {
          rating?.metacritic &&
          <RatingBadge
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
      
      <GameInfoBlockHeader headerText='About'/>
      <Typography variant="body1" component="p" mb={3} color={'textSecondary'}>
        {description}
      </Typography>
      
      <GameInfoBlockHeader headerText='Info'/>
      <GameParameters parameters={getParameters({
        developers,
        publishers,
        platforms,
        release,
        esrb,
        playtime
      })}/>
      
      <GameInfoBlockHeader headerText='Screenshots'/>
      <GameScreenshots gameId={id}/>
      <Box mb={3}/>
      
      <GameInfoBlockHeader headerText='Trailers'/>
      <GameMovies gameId={id}/>
      <Box mb={3}/>
      
      <GameInfoBlockHeader headerText='Achievements'/>
      <GameAchievements gameId={id} />
      <Box mb={3}/>
      
      <GameInfoBlockHeader headerText='Where to buy'/>
      <GameStores gameId={id} stores={stores}/>
      <Box mb={3}/>
      
      <GameInfoBlockHeader headerText='System requirements'/>
      <Suspense>
        <GameSystemRequirements platforms={platforms}/>
      </Suspense>
      <Box mb={3}/>
      
      <GameInfoBlockHeader headerText='Reddit comments'/>
      <Suspense>
        <GameComments gameId={id}/>
      </Suspense>
      <Box mb={3}/>
    </Stack>
  )
}