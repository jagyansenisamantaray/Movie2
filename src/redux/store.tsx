import { configureStore } from '@reduxjs/toolkit'
import MovieSlice from "../redux/MovieSlice"
export const store = configureStore({
  reducer: {
    movie:MovieSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch