import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Cart.module.scss';

const Cart = () => {
  return (
    <div className={classes.cartContainer}>
      <Card className={classes.cart}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </Card>
    </div>
  );
};

export default Cart;
