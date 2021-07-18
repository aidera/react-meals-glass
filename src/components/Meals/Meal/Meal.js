import React, { useRef } from 'react';

import classes from './Meal.module.scss';
import Card from '../../UI/Card/Card';

const Meal = (props) => {
  const { meal, addToCart } = props;

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

  return (
    <div
      ref={containerRef}
      className={classes.container}
      onMouseMove={moveMeal}
      onMouseOut={resetMoveMeal}
    >
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
            <div
              onClick={() => addToCart(meal.id, 1)}
              className={classes.addToCart}
            >
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
