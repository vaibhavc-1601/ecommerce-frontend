import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  original_total: 0,
  final_total: 0,
}

// Helper to recalc totals
const calculateTotals = (cart) => {
  let original_total = 0
  let final_total = 0
  cart.forEach((item) => {
    original_total += item.original_price * item.qty
    final_total += item.final_price * item.qty
  })
  return { original_total, final_total }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state, { payload }) => {
      const existingItem = state.cart.find(
        (cd) => cd.productId === payload.productId
      )
      if (existingItem) {
        existingItem.qty += 1
      } else {
        state.cart.push({
          productId: payload.productId,
          original_price: payload.original_price,
          final_price: payload.final_price,
          qty: 1,
        })
      }

      const totals = calculateTotals(state.cart)
      state.original_total = totals.original_total
      state.final_total = totals.final_total
      localStorage.setItem('cart', JSON.stringify(state))
    },

    updateQty: (state, { payload }) => {
      const item = state.cart.find((cd) => cd.productId === payload.productId)
      if (item) {
        item.qty = payload.qty
        if (item.qty <= 0) {
          state.cart = state.cart.filter(
            (cd) => cd.productId !== payload.productId
          )
        }
      }
      const totals = calculateTotals(state.cart)
      state.original_total = totals.original_total
      state.final_total = totals.final_total
      localStorage.setItem('cart', JSON.stringify(state))
    },

    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((cd) => cd.productId !== payload)
      const totals = calculateTotals(state.cart)
      state.original_total = totals.original_total
      state.final_total = totals.final_total
      localStorage.setItem('cart', JSON.stringify(state))
    },

    emptyCart: (state) => {
      state.cart = []
      state.original_total = 0
      state.final_total = 0
      localStorage.removeItem('cart')
    },

    lstoCart: (state) => {
      const data = JSON.parse(localStorage.getItem('cart'))
      if (data) {
        state.cart = data.cart
        state.original_total = data.original_total
        state.final_total = data.final_total
      }
    },
  },
})

export const { addtoCart, updateQty, removeFromCart, emptyCart, lstoCart } =
  cartSlice.actions

export default cartSlice.reducer
