// src/Utility/reducer.js
import { actionType } from "./actionType";

export const initialState = {
  user: null,
  cart: [],
  products: [],
  orders: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.id),
      };

    case actionType.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case actionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    case actionType.SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };

    default:
      return state;
  }
};

export default reducer;
