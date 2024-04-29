// store/reducers/delivery.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Address {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

interface DeliveryState {
  receiver: string
  address: Address
}

const initialState: DeliveryState = {
  receiver: '',
  address: {
    description: '',
    city: '',
    zipCode: '',
    number: 0,
    complement: ''
  }
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    updateDeliveryInfo: (state, action: PayloadAction<DeliveryState>) => {
      state.receiver = action.payload.receiver
      state.address = action.payload.address
    }
  }
})

export const { updateDeliveryInfo } = deliverySlice.actions
export default deliverySlice.reducer
