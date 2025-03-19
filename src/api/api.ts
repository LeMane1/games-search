import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IGamesResponse} from "@/api/types";

interface IGameRequestParams {
  search?: string;
  ordering?: string;
  page?: number;
}

// Define a service using a base URL and expected endpoints
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
    getGamesByName: builder.query<IGamesResponse, IGameRequestParams>({
      query: ({search, ordering, page}) => ({
        url: `/games`,
        method: 'GET',
        params: {
          search,
          ordering,
          page,
          key: 'c717a6d152e74669a6066ea4cfe239b1'
        }
      }),
    }),
  }),
})

export const { useLazyGetGamesByNameQuery } = gamesApi