'use client'

import {useLazyGetGamesByNameQuery} from "@/api/api"
import {GameCard} from "@/components/games-list/ui/GameCard";
import {Grid} from "@mui/system";
import { useSelector } from 'react-redux'
import {RootState} from "@/lib/store";
import {useEffect} from "react";
import {Box, CircularProgress, Typography} from "@mui/material";
import {SortSelect} from "@/components/sort-select";

export const GamesList = () => {
  const [refetch, { data: games, isLoading, isFetching, isSuccess }] = useLazyGetGamesByNameQuery()
  const searchValue: string = useSelector((state: RootState) => state.mainReducer.searchValue)
  const orderingValue: string = useSelector((state: RootState) => state.mainReducer.orderingValue)
  
  useEffect(() => {
    if (searchValue) refetch({search: searchValue, ordering: orderingValue})
  }, [searchValue, orderingValue])
  
  return (
    <>
      {(isLoading || isFetching) && <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress />
      </Box>}
      
      <Box
        my={2}
        sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
      >
        <Typography component="div" variant="h5" sx={{ flexGrow: 1 }}>All games</Typography>
        <SortSelect/>
      </Box>
      
      {games && isSuccess && !(isLoading || isFetching) &&
        <Grid container spacing={2}>
          {games && games?.results && games?.results.map((game) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={game.id}>
              <GameCard
                id={game.id}
                name={game.name}
                background_image={game.background_image}
                platforms={game.parent_platforms}
                metacritic={game.metacritic}
              />
            </Grid>
          ))
          }
        </Grid>
        }
    </>
  )
}