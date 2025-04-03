import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchParametersState {
  sortOrdering: string
}

const initialState: SearchParametersState = {
  sortOrdering: '',
}

export const searchParametersSlice = createSlice({
  name: 'searchParameters',
  initialState,
  reducers: {
    resetAllSearchParameters: (state) => {
      state.sortOrdering = ''
    },
    // changeCurrentScreenshotId: (state, action: PayloadAction<number>) => {
    //   state.currentScreenshotId = action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const {
  resetAllSearchParameters,
} = searchParametersSlice.actions

export default searchParametersSlice.reducer