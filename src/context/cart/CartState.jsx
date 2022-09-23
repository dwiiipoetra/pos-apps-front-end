import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_ITEM, CHANGE_QUANTITY } from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const changeQuantity = (qty, item) => {
    dispatch({ type: CHANGE_QUANTITY, payload: { qty, item } });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
