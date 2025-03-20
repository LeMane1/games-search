'use client'

import {useParams} from 'next/navigation'
import {useGetGameByIdQuery} from "@/api/api";
import {GameInfo} from "src/app/games/[id]/game-info";
import {Box, CircularProgress, Stack} from "@mui/material";
import BgOverlay from "@/components/bg-overlay";

export default function GamePage() {
  const params = useParams();
  const {data, isLoading, isSuccess} = useGetGameByIdQuery(Number(params.id))
  
  return (
    <>
      <BgOverlay imageName={data?.background_image}/>
      
      {data && isSuccess && <Stack spacing={5} direction={{
        xs: 'column',
        sm: 'column',
        md: 'row',
        lg: 'row',
        xl: 'row'
      }}>
        <Box
          component="img"
          src={data?.background_image}
          alt="Game Image"
          boxShadow={5}
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: 300,
              lg: 300,
              xl: 300
            },
            height: 400,
            objectFit: 'cover',
            borderRadius: 2
          }}
        />
        
        <GameInfo
          name={data?.name}
          platforms={data?.parent_platforms}
          description={data?.description_raw}
          genres={data?.genres}
          stores={data?.stores}
          rating={{
            metacritic: data?.metacritic,
            rawg: data?.rating
          }}
          developers={data?.developers}
          publishers={data?.publishers}
          release={data?.released}
          esrb={data?.esrb_rating?.name}
        />
      </Stack>}
      
      {isLoading && <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}>
        <CircularProgress />
      </Box>}
    </>
  )
}