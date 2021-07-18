import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import classes from './AddToCartModal.module.scss';
import Backdrop from '../UI/Backdrop/Backdrop';
import ModalOverlay from '../UI/ModalOverlay/ModalOverlay';

const AddToCartModal = (props) => {
  const { meal, onClose, onAdd } = props;

  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(0);

  const onChangeHandler = (event) => {
    let amount = event.target.value;
    setAmount(amount);
  };

  const onAddHandler = () => {
    if (+amount > 0) {
      onAdd(meal.id, +amount);
      onClose();
    }
  };

  useEffect(() => {
    let newTotal = Math.round(meal.price * +amount * 100) / 100;
    if (newTotal < 0) {
      newTotal = 0;
    }
    setTotal(newTotal);
  }, [amount, meal]);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={classes.modal}>
          <h2>{meal.title}</h2>
          <div className={classes.content}>
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
                onClick={onAddHandler}
                disabled={+amount <= 0}
              >
                Add to cart
              </button>
            </div>
          </div>
        </ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default AddToCartModal;
