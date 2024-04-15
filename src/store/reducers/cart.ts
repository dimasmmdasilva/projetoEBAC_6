import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../pages/Home'

type CartState = {
  items: MenuItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
