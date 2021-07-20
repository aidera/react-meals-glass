import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

import classes from './AddToCartModal.module.scss';
import Backdrop from '../UI/Backdrop/Backdrop';
import ModalOverlay from '../UI/ModalOverlay/ModalOverlay';
import CartContext from '../../store/cart.context';

const AddToCartModal = (props) => {
  const { meal, onClose } = props;

  const context = useContext(CartContext);

  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = Math.round(meal.price * +amount * 100) / 100;
    if (newTotal < 0) {
      newTotal = 0;
    }
    setTotal(newTotal);
  }, [amount, meal]);

  const onChangeHandler = (event) => {
    let amount = event.target.value;
    setAmount(amount);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (+amount > 0) {
      context.addToCart({ itemId: meal.id, amount: +amount });
      onClose();
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={classes.modal}>
          <h2>{meal.title}</h2>
          <form className={classes.form} onSubmit={onSubmitHandler}>
            <div>
              <input
                type="number"
                placeholder="amount"
                value={amount}
                onChange={onChangeHandler}
              />{' '}
              x ${meal.price} = <strong>${total}</strong>
            </div>
            <div>
              <button
                className={classes.button}
                onClick={onSubmitHandler}
                onSubmit={onSubmitHandler}
                disabled={+amount <= 0}
                type="submit"
              >
                Add to cart
              </button>
            </div>
          </form>
        </ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default AddToCartModal;
