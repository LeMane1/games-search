import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  searchValue: string;
  orderingValue: string;
}

const initialState: MainState = {
  searchValue: '',
  orderingValue: ''
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    changeOrderingValue: (state, action: PayloadAction<string>) => {
      state.orderingValue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSearchValue, changeOrderingValue } = mainSlice.actions

export default mainSlice.reducer