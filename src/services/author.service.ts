import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAuthor } from '../interfaces/RootInterfaces'

export const authorsAPI = createApi({
  reducerPath: 'authorsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URI }),
  endpoints: build => ({
    fetchAllAuthors: build.query<IAuthor[], ''>({
      query: () => ({
        url: '/authors'
      })
    })
  })
})

export const { useFetchAllAuthorsQuery } = authorsAPI
