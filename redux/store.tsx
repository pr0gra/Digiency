import { configureStore } from '@reduxjs/toolkit'
import { digiencyApi } from './digiencyApi'

export const store = configureStore({
  reducer: {
    [digiencyApi.reducerPath]: digiencyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(digiencyApi.middleware),
})
