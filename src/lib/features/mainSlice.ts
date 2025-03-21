import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  currentScreenshotId: number;
  isModalOpen: boolean;
}

const initialState: MainState = {
  currentScreenshotId: 0,
  isModalOpen: false,
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeCurrentScreenshotId, changeModalState } = mainSlice.actions

export default mainSlice.reducer