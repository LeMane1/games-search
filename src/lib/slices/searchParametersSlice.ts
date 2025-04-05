import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlatformValue {
  platformId: number;
  platformName: string;
}

export interface SearchParametersState {
  sortOrdering: string;
  selectedPlatforms: PlatformValue[];
}

const initialState: SearchParametersState = {
  sortOrdering: '',
  selectedPlatforms: []
}

export const searchParametersSlice = createSlice({
  name: 'searchParameters',
  initialState,
  reducers: {
    resetAllSearchParameters: (state) => {
      state.sortOrdering = ''
    },
    changeSortOrdering: (state, action: PayloadAction<string>) => {
      state.sortOrdering = action.payload
    },
    changeSelectedPlatforms: (state, action: PayloadAction<PlatformValue[]>) => {
      state.selectedPlatforms = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  resetAllSearchParameters,
  changeSortOrdering,
  changeSelectedPlatforms
} = searchParametersSlice.actions

export default searchParametersSlice.reducer