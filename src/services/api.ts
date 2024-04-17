// Services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedMenu: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeaturedMenuQuery } = api
