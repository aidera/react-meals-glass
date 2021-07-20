import React from 'react';

import classes from './App.module.scss';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import meals from './data/meals';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <div className={classes.container}>
        <Meals meals={meals} />
        <Cart meals={meals} />
      </div>
    </div>
  );
}

export default App;
