import { createSlice } from '@reduxjs/toolkit'
import ProductData from '../ProductData'

const initialState = {
  cart: [],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddToCart: (state, action) => {

      let find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal

        },
        {
          totalPrice: 0,
          totalQuantity: 0
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
  state.cart = state.cart.filter(
    (item) => item.id !== action.payload
  );
}
  }
})

export const { AddToCart, getCartTotal, increaseItemQuantity,decreaseItemQuantity,removeItem} = CartSlice.actions
export default CartSlice.reducer