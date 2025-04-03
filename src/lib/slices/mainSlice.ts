import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  currentScreenshotId: number;
  isModalOpen: boolean;
  isLoginStateSelected: boolean;
  isDrawerOpened: boolean;
}

const initialState: MainState = {
  currentScreenshotId: 0,
  isModalOpen: false,
  isLoginStateSelected: true,
  isDrawerOpened: false,
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
    changeLoginState: (state) => {
      state.isLoginStateSelected = !state.isLoginStateSelected
    },
    changeDrawerState: (state) => {
      state.isDrawerOpened = !state.isDrawerOpened
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  changeCurrentScreenshotId,
  changeModalState,
  changeLoginState,
  changeDrawerState
} = mainSlice.actions

export default mainSlice.reducer