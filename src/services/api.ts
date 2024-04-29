// Services/api.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

// Definir o tipo dos dados do pedido
interface Product {
  id: number
  price: number
}

interface Address {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

interface Card {
  name: string
  number: string
  code: number
  expires: {
    month: number
    year: number
  }
}

interface OrderPayload {
  products: Product[]
  delivery: {
    receiver: string
    address: Address
  }
  payment: {
    card: Card
  }
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedMenu: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),

    submitOrder: builder.mutation<OrderPayload, OrderPayload>({
      query: (orderData) => ({
        url: '/checkout',
        method: 'POST',
        body: orderData
      })
    })
  })
})

export const { useGetFeaturedMenuQuery, useSubmitOrderMutation } = api
