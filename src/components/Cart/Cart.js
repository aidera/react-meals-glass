import React, { useContext, useMemo } from 'react';

import Card from '../UI/Card/Card';
import classes from './Cart.module.scss';
import CartContext from '../../store/cart.context';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/remove.svg';

const Cart = (props) => {
  const { meals } = props;

  const context = useContext(CartContext);

  /** We can wrap total price in useMemo to avoid it's recalls */
  const totalPrice = useMemo(() => {
    let total = 0;
    context.cartState.items.forEach((cartItem) => {
      const meal = meals.find((meal) => cartItem.id === meal.id);
      total += meal.price * cartItem.amount;
      total = Math.round(total * 100) / 100;
    });
    return total;
  }, [context.cartState.items, meals])

  return (
    <div className={classes.cartContainer}>
      <Card className={classes.cart}>
        {context.cartState.items.length <= 0 && (
          <div className={classes.emptyCart}>
            <span className={classes.error}>Cart is empty. Add something!</span>
          </div>
        )}
        {context.cartState.items.length > 0 && (
          <>
            <ul>
              {context.cartState.items.map((item) => {
                const meal = meals.find((meal) => item.id === meal.id);
                return (
                  <li key={item.id}>
                    <div className={classes.imageContainer}>
                      <img src={meal.img} alt={meal.title} />
                    </div>
                    <div className={classes.content}>
                      <strong>{meal.title}</strong>
                      <span>
                        <span>
                          ${Math.round(meal.price * item.amount * 100) / 100}
                        </span>{' '}
                        ({item.amount} x ${meal.price})
                      </span>
                    </div>
                    <div className={classes.actions}>
                      <button
                        className={classes.plus}
                        onClick={() =>
                          context.addToCart({ itemId: item.id, amount: 1 })
                        }
                      >
                        <PlusIcon />
                      </button>
                      <button
                        className={classes.minus}
                        onClick={() =>
                          context.substractFromCart({
                            itemId: item.id,
                            amount: 1,
                          })
                        }
                      >
                        <MinusIcon />
                      </button>
                      <button
                        className={classes.remove}
                        onClick={() =>
                          context.removeFromCart({ itemId: item.id })
                        }
                      >
                        <RemoveIcon />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={classes.total}>Total: ${totalPrice}</div>
          </>
        )}
      </Card>
    </div>
  );
};

/**  We use context state that always change, so React.memo is useless */
export default Cart;
