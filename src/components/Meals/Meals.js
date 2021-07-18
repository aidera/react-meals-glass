import React from 'react';

import classes from './Meals.module.scss';
import Meal from './Meal/Meal';

const Meals = (props) => {
  const { meals, addToCart } = props;

  return (
    <div className={classes.meals}>
      {meals.map((meal) => {
        return <Meal key={meal.id} meal={meal} addToCart={addToCart} />;
      })}
    </div>
  );
};

export default Meals;
