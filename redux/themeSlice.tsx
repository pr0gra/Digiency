import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'auto',
  },
  reducers: {
    switchTheme(state, action) {
      state.theme = action.payload
    },
  },
})

export const { switchTheme } = themeSlice.actions
export default themeSlice.reducer
