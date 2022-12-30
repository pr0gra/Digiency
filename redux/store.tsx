import { configureStore } from '@reduxjs/toolkit'
import { digiencyApi } from './digiencyApi'
import articlesSlice from './articleSlice'
import themeSlice from './themeSlice'

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    theme: themeSlice,
    [digiencyApi.reducerPath]: digiencyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      digiencyApi.middleware,
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
