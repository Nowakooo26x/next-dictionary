import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cards: 0,
    isActiveCard: false,
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setIsActiveCard: (state) => {
      state.isActiveCard = !state.isActiveCard
    },
  },
})

export const { setIsActiveCard } = cardsSlice.actions

export default cardsSlice.reducer