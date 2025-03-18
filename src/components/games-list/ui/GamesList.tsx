'use client'

import {useGetGamesByNameQuery} from "@/api/api"

export const GamesList = () => {
  const {data} = useGetGamesByNameQuery('god of war')
  
  return (
    <div>{data?.results[0].id}</div>
  )
}