import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IGamesResponse} from "@/api/types";

// Define a service using a base URL and expected endpoints
export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.rawg.io/api',
    prepareHeaders: (headers: Headers): Headers => {
      headers.set('accept', 'application/json')
      headers.set('X-API-KEY', 'c717a6d152e74669a6066ea4cfe239b1')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getGamesByName: builder.query<IGamesResponse, string>({
      query: (search) => ({
        url: `/games`,
        method: 'GET',
        params: {
          search
        }
      }),
    }),
  }),
})

export const { useGetGamesByNameQuery } = gamesApi