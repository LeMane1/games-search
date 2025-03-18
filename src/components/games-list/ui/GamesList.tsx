'use client'

import {useLazyGetGamesByNameQuery} from "@/api/api"
import {GameCard} from "@/components/games-list/ui/GameCard";
import {Grid} from "@mui/system";
import { useSelector } from 'react-redux'
import {RootState} from "@/lib/store";
import {useEffect} from "react";
import {useDebounce} from "use-debounce";
import {CircularProgress} from "@mui/material";

export const GamesList = () => {
  const [refetch, { data: games, isLoading, isFetching, isSuccess }] = useLazyGetGamesByNameQuery()
  const searchValue: string = useSelector((state: RootState) => state.mainReducer.searchValue)
  const [debouncedSearchValue] = useDebounce(searchValue, 1000);
  
  useEffect(() => {
    refetch(debouncedSearchValue)
  }, [debouncedSearchValue])
  
  return (
    <>
      {isSuccess && <Grid container spacing={2}>
        {games && games?.results && games?.results.map((game) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={game.id}>
            <GameCard
              id={game.id}
              name={game.name}
              background_image={game.background_image}
              platforms={game.parent_platforms}
            />
          </Grid>
        ))
        }
      </Grid>}
      
      {(isLoading || isFetching) && <CircularProgress />}
    </>
  )
}