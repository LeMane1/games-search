'use client'

import {useGetGamesByNameQuery} from "@/api/api"
import {GameCard} from "@/components/games-list/ui/GameCard";
import {Grid} from "@mui/system";

export const GamesList = () => {
  const {data} = useGetGamesByNameQuery('civilization')
  
  return (
    <>
      <Grid container spacing={2}>
        {data && data?.results && data?.results.map((game) => (
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }} key={game.id}>
            <GameCard
              id={game.id}
              name={game.name}
              background_image={game.background_image}
              platforms={game.parent_platforms}
            />
          </Grid>
        ))
        }
      </Grid>
    </>
  )
}