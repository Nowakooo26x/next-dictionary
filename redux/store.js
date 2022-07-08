import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import cardsReducer from "redux/features/cards/cardsSlice"
import dictionaryReducer from 'redux/features/dictionary/dictionarySlice'

import { dictionaryAPI } from 'redux/services/dictionaryAPI'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    dictionary: dictionaryReducer,
    
    [dictionaryAPI.reducerPath]: dictionaryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictionaryAPI.middleware),
})

setupListeners(store.dispatch)