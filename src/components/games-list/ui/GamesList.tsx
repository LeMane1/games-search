'use client'

import {useLazyGetGamesByNameQuery} from "@/api/api"
import {GameCard} from "@/components/games-list/ui/GameCard";
import {Grid} from "@mui/system";
import { useSelector } from 'react-redux'
import {RootState} from "@/lib/store";
import {useEffect} from "react";
import {Box, CircularProgress, Typography} from "@mui/material";
import {SortSelect} from "@/components/sort-select";
import {Pagination} from "@/components/pagination";

export const GamesList = () => {
  const [refetch, { data: games, isLoading, isFetching, isSuccess }] = useLazyGetGamesByNameQuery()
  const searchValue: string = useSelector((state: RootState) => state.mainReducer.searchValue)
  const orderingValue: string = useSelector((state: RootState) => state.mainReducer.orderingValue)
  const pageValue: number = useSelector((state: RootState) => state.mainReducer.pageValue)
  
  useEffect(() => {
    if (searchValue){
      refetch({search: searchValue, ordering: orderingValue, page: pageValue})
    }
  }, [searchValue, orderingValue, pageValue])
  
  return (
    <>
      <Box
        my={2}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
      }}
      >
        <Typography component="div" variant="h5" sx={{ flexGrow: 1 }}>
          {games?.count} items for <b>{searchValue}</b>
        </Typography>
        <SortSelect/>
      </Box>
      
      {isSuccess && !(isLoading || isFetching) && games && games?.results?.length > 0 &&
        <Grid container spacing={2} my={3}>
          {games && games.results.map((game) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={game.id}>
              <GameCard
                id={game.id}
                name={game.name}
                background_image={game.background_image}
                platforms={game.parent_platforms}
                metacritic={game.metacritic}
                genres={game.genres}
                released={game.released}
              />
            </Grid>
          ))
          }
        </Grid>
      }
      
      {(isLoading || isFetching) &&
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <CircularProgress />
        </Box>
      }
      
      {games?.count && <Pagination itemsCount={games?.count}/>}
    </>
  )
}