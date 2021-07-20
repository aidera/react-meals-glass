import React, { useReducer } from 'react';
import cartReducer, { cartActions, cartInitialState } from './cart.reducer';

const CartContext = React.createContext({
  cartState: cartInitialState,
  addToCart: () => {},
  substractFromCart: () => {},
  removeFromCart: () => {},
});

export const CartContextProvider = (props) => {
  const { children } = props;

  const [cartState, dispatchCartItems] = useReducer(
    cartReducer,
    cartInitialState
  );

  const addToCart = ({ itemId, amount }) => {
    dispatchCartItems({
      type: cartActions.addToCart,
      payload: { itemId, amount },
    });
  };

  const substractFromCart = ({ itemId, amount }) => {
    dispatchCartItems({
      type: cartActions.subtractFromCart,
      payload: { itemId, amount },
    });
  };

  const removeFromCart = ({ itemId }) => {
    dispatchCartItems({
      type: cartActions.removeFromCart,
      payload: { itemId },
    });
  };

  return (
    <CartContext.Provider
      value={{ cartState, addToCart, substractFromCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
