import React, { useState } from 'react';

import classes from './App.module.scss';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import meals from './data/meals';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, amount) => {
    const newItems = [...cartItems];
    const foundInCartIdx = newItems.findIndex((item) => item.id === itemId);
    if (foundInCartIdx > -1) {
      const currentItemAmount = newItems[foundInCartIdx].amount;
      newItems[foundInCartIdx].amount = currentItemAmount + amount;
    } else {
      newItems.push({ id: itemId, amount: amount });
    }

    setCartItems(newItems);
  };

  const subtractFromCart = (itemId, amount) => {
    const newItems = [...cartItems];
    const foundInCartIdx = newItems.findIndex((item) => item.id === itemId);
    if (foundInCartIdx > -1) {
      newItems[foundInCartIdx].amount =
        newItems[foundInCartIdx].amount - amount;
      if (newItems[foundInCartIdx].amount <= 0) {
        removeFromCart(itemId);
      } else {
        setCartItems(newItems);
      }
    }
  };

  const removeFromCart = (itemId) => {
    const newItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newItems);
  };

  return (
    <div className="App">
      <AnimatedBackground />
      <div className={classes.container}>
        <Meals addToCart={addToCart} meals={meals} />
        <Cart
          meals={meals}
          cartItems={cartItems}
          addToCart={addToCart}
          subtractFromCart={subtractFromCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
