// store/reducers/payment.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Card {
  name: string
  number: string
  code: number
  expires: {
    month: number
    year: number
  }
}

const initialState: Card = {
  name: '',
  number: '',
  code: 0,
  expires: {
    month: 0,
    year: 0
  }
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    updatePaymentInfo: (state, action: PayloadAction<Card>) => {
      state = action.payload
    }
  }
})

export const { updatePaymentInfo } = paymentSlice.actions
export default paymentSlice.reducer
