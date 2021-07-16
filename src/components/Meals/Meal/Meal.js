import React from 'react';

import classes from './Meal.module.scss';
import Card from '../../UI/Card/Card';

const Meal = () => {
  return <div className={classes.mealContainer}>
    <Card>Meal</Card>
  </div>;
};

export default Meal;
