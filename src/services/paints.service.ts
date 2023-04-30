import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPaint, IPaintQueryParams } from '../interfaces/RootInterfaces'

// id: number | undefined, q: string | undefined, _page: number | undefined, authorId: number | undefined
export const paintAPI = createApi({
  reducerPath: 'paintAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URI }),
  endpoints: build => ({
    fetchAllPaints: build.query({
      query: () => ({
        url: '/paintings'
      })
    }),
    fetchPaintsWithParams: build.query<IPaint[], IPaintQueryParams>({
      query: ({ id, q, _page, authorId, locationId, _limit, created_gte, created_lte }) => ({
        url: `/paintings/`,
        params: { id, q, _page, authorId, locationId, _limit, created_gte, created_lte }
      })
    })
  })
})

export const { useFetchAllPaintsQuery, useFetchPaintsWithParamsQuery } = paintAPI
