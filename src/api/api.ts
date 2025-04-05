import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IGamePlatformsResponse} from "@/api/types";

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
    getPlatformsList: builder.query<IGamePlatformsResponse, void>({
      query: () => ({
        url: `/platforms/lists/parents`,
        method: 'GET',
        params: {
          key: 'c717a6d152e74669a6066ea4cfe239b1'
        }
      })
    })
  }),
})

export const {useGetPlatformsListQuery} = gamesApi