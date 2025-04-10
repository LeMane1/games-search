import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  currentScreenshotId: number;
  isModalOpen: boolean;
  isDrawerOpened: boolean;
  isSearchParametersModalOpened: boolean;
  snackMessage: string;
}

const initialState: MainState = {
  currentScreenshotId: 0,
  isModalOpen: false,
  isDrawerOpened: false,
  isSearchParametersModalOpened: false,
  snackMessage: ''
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeCurrentScreenshotId: (state, action: PayloadAction<number>) => {
      state.currentScreenshotId = action.payload
    },
    changeModalState: (state) => {
      state.isModalOpen = !state.isModalOpen
    },
    changeDrawerState: (state) => {
      state.isDrawerOpened = !state.isDrawerOpened
    },
    changeSearchParametersModalState: (state, action: PayloadAction<boolean>) => {
      state.isSearchParametersModalOpened = action.payload
    },
    changeSnackMessage: (state, action: PayloadAction<string>) => {
      state.snackMessage = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  changeCurrentScreenshotId,
  changeModalState,
  changeDrawerState,
  changeSearchParametersModalState,
  changeSnackMessage
} = mainSlice.actions

export default mainSlice.reducer