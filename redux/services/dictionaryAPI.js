import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const dictionaryAPI = createApi({
  reducerPath: "dictionaryAPI",
  //baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL_HOST }),
  endpoints: (builder) => ({
    getWordByID: builder.query({
      query: (id) => `/word/${id}`,
    }),
    getWords: builder.query({
      query: () => `/word`,
    }),
    getRandomWords: builder.query({
      query: () => `/word/random/`,
    }),
    getFavouriteWords: builder.query({
      query: () => `/word/favourite/`,
    }),
    addFavouriteWord: builder.query({
      query: (id) => `/word/favourite/${id}`,
    }),
    postAddFavouriteWord: builder.mutation({
      query: (id) => ({
        url: `/word/favourite/${id}`,
        method: "POST",
      }),
    }),
    deleteFavouriteWord: builder.mutation({
      query: (id) => ({
        url: `/word/favourite/${id}`,
        method: "DELETE",
      }),
    }),
    addStudyWord: builder.mutation({
      query: (id) => ({
        url: `/word/study/${id}`,
        method: "POST",
      }),
    }),
    getStudyWords: builder.query({
      query: () => `/word/study/`,
    }),
    getLessonWords: builder.query({
      query: () => `/word/lesson/`,
    }),
  }),
});

export const {
  useGetFavouriteWordsQuery,
  useGetWordByIDQuery,
  useGetWordsQuery,
  useGetRandomWordsQuery,
  useGetLessonWordsQuery,
  useAddFavouriteWordQuery,
  usePostAddFavouriteWordMutation,
  useDeleteFavouriteWordMutation,
  useAddStudyWordMutation,
  useGetStudyWordsQuery,
} = dictionaryAPI;
