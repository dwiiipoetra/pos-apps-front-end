import { ADD_TO_CART, REMOVE_ITEM, CHANGE_QUANTITY } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    case CHANGE_QUANTITY: {
      // console.log("qty ", action.payload.qty);
      // console.log("payload ", action.payload.item.stock);

      // reset qty to 1 if purchases exceeds stock
      if (action.payload.qty > action.payload.item.stock) {
        toastr.error("Purchase exceeds available stock");
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.item.id ? { ...item, qty: 1 } : item
          ),
        };
      }
      // reset qty to 1 if qty is minus / zero
      if (action.payload.qty <= 0) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.item.id ? { ...item, qty: 1 } : item
          ),
        };
      }

      // change qty value
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.item.id
            ? { ...item, qty: Number(action.payload.qty) }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
