import React, { useRef, useState } from 'react';

import classes from './Meal.module.scss';
import Card from '../../UI/Card/Card';
import AddToCartModal from '../../AddToCartModal/AddToCartModal';

const Meal = (props) => {
  const { meal, addToCart } = props;

  const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false);

  const containerRef = useRef();
  const animationRef = useRef();

  const moveMeal = (event) => {
    const refSizes = containerRef.current.getBoundingClientRect();

    const x = event.nativeEvent.x;
    const y = event.nativeEvent.y;

    const xAxisRotation = (y - refSizes.height / 2) * (20 / refSizes.height);
    const yAxisRotation = -(x - refSizes.width / 2) * (20 / refSizes.width);

    const transformations = [
      'rotateY(' + yAxisRotation + 'deg)',
      'rotateX(' + xAxisRotation + 'deg)',
    ];

    animationRef.current.style.transition = '0s';
    animationRef.current.style.transform = transformations.join(' ');
  };

  const resetMoveMeal = () => {
    const transformations = ['rotateY(0deg)', 'rotateX(0deg)'];
    animationRef.current.style.transition = '0.5s';
    animationRef.current.style.transform = transformations.join(' ');
  };

  const openAddToCartModal = () => {
    setIsAddToCartModalOpen(true);
    resetMoveMeal();
  };

  const closeAddToCartModal = () => {
    resetMoveMeal();
    setIsAddToCartModalOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={classes.container}
      onMouseMove={moveMeal}
      onMouseOut={resetMoveMeal}
    >
      {isAddToCartModalOpen && (
        <AddToCartModal
          item={meal.id}
          meal={meal}
          onAdd={addToCart}
          onClose={closeAddToCartModal}
        />
      )}
      <div ref={animationRef} className={classes.animation}>
        <Card className={classes.card}>
          <div className={classes.content}>
            <div className={classes.imageContainer}>
              <img className={classes.image} src={meal.img} alt={meal.title} />
            </div>
            <h3 className={classes.h3}>{meal.title}</h3>
            <div className={classes.description}>{meal.description}</div>
            <span className={classes.price}>${meal.price}</span>
          </div>
          <div className={classes.addToCartContainer}>
            <div onClick={openAddToCartModal} className={classes.addToCart}>
              <span>+</span>
              <span>Add to Cart</span>
            </div>
            <div className={classes.addToCartBG}></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Meal;
