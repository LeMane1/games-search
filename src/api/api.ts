import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IGameScreenShotResponse} from "@/api/types";

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.rawg.io/api',
    prepareHeaders: (headers: Headers): Headers => {
      headers.set('accept', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getGameScreenShotsById: builder.query<IGameScreenShotResponse, number>({
      query: (id: number) => ({
        url: `/games/${id}/screenshots`,
        method: 'GET',
        params: {
          key: 'c717a6d152e74669a6066ea4cfe239b1'
        }
      })
    })
  }),
})

export const {useGetGameScreenShotsByIdQuery} = gamesApi