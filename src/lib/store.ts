import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {gamesApi} from "@/api/api";
import mainReducer from '@/lib/slices/mainSlice'
import searchParametersReducer from "@/lib/slices/searchParametersSlice";

const rootReducer = combineReducers({
  [gamesApi.reducerPath]: gamesApi.reducer,
  mainReducer,
  searchParametersReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']