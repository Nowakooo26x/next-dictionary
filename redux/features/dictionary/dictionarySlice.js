import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  words: [],
  sortWords: [],
  randomWords: [],
  pageRandomWords: {
    page: 0,
    rowsPerPage: 15,
  },
  displayLetter: "",
  displayLevel: {
    a1: true,
    a2: true,
    b1: true,
    b2: true,
    c1: true,
  },
  visibleList: []
}

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    setWords: (state, action) => {
      state.words = action.payload
    },
    addVisible: (state, action) => {
      state.visibleList.push(action.payload)
    },
    removeVisible: (state, action) => {
      state.visibleList = state.visibleList.filter( (item) => item !== action.payload)
      
    },
    changeStateLevel: (state, action) => {
      state.displayLevel[action.payload] = !state.displayLevel[action.payload]
    },
    setLetter: (state, action) => {
      state.displayLetter = action.payload
    },
    setSortWords: (state, action) => {
      state.sortWords = action.payload
    },
    setRandomWords: (state, action) => {
      state.randomWords = action.payload;
    },
    setPage: (state, action) => {
      state[action.payload.name].page = action.payload.setValue;
    },
    setRowsPerPage: (state, action) => {
      state[action.payload.name].rowsPerPage = action.payload.setValue;
    },
  },
})

export const { setWords, setSortWords, setRandomWords, addVisible, removeVisible, changeStateLevel, setLetter, setPage, setRowsPerPage} = dictionarySlice.actions

export default dictionarySlice.reducer