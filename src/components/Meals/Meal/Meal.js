import React, { useRef } from 'react';

import classes from './Meal.module.scss';
import Card from '../../UI/Card/Card';

const Meal = (props) => {
  const { meal } = props;

  const containerRef = useRef();
  const animationRef = useRef();

  const moveMeal = (event) => {
    const refSizes = containerRef.current.getBoundingClientRect();

    const x = event.nativeEvent.layerX;
    const y = event.nativeEvent.layerY;

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
    const transformations = [
      'rotateY(0deg)',
      'rotateX(0deg)',
    ];
    animationRef.current.style.transition = '0.5s';
    animationRef.current.style.transform = transformations.join(' ');
  }

  return (
    <div
      ref={containerRef}
      className={classes.container}
      onMouseMove={moveMeal}
      onMouseOut={resetMoveMeal}
    >
      <div ref={animationRef} className={classes.animation}>
        <Card className={classes.card}>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={meal.img} />
          </div>
          <h3>{meal.title}</h3>
          <span>{meal.price}</span>
        </Card>
      </div>
    </div>
  );
};

export default Meal;
