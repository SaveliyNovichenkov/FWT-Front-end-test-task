import { createSlice } from '@reduxjs/toolkit'

interface ITheme {
  theme: 'light' | 'dark'
  isLoading: boolean
  counter: number
}

const initialState: ITheme = {
  theme: 'dark',
  isLoading: false,
  counter: 0
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state = initialState, action) {
      console.log(action.payload)
      state.theme = action.payload
    }
  }
})
