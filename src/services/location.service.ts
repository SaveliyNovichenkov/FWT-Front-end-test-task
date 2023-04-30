import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ILocation } from '../interfaces/RootInterfaces'

export const locationAPI = createApi({
  reducerPath: 'locationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URI }),
  endpoints: build => ({
    fetchAllLocations: build.query<ILocation[], ''>({
      query: () => ({
        url: '/locations'
      })
    })
  })
})

export const { useFetchAllLocationsQuery } = locationAPI
