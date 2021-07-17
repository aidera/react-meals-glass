import React, { useState } from 'react';

import classes from './App.module.scss';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import mealsData from './data/meals';

function App() {
  const [meals, setMeals] = useState(mealsData);

  return (
    <div className="App">
      <AnimatedBackground />
      <div className={classes.container}>
        <Meals meals={meals} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
