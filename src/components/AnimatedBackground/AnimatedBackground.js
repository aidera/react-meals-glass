import React, { useRef, useEffect } from 'react';

import { useMousePosition } from '../../hooks/useMousePosition';
import classes from './AnimatedBackground.module.scss';

const AnimatedBackground = () => {
  const wave1Ref = useRef();
  const wave2Ref = useRef();

  const positions = useMousePosition();

  useEffect(() => {
    const xP = (positions.x / window.innerWidth) * 100;
    const yP =  (positions.y / window.innerHeight) * 100;

    wave1Ref.current.setAttribute(
      'd',
      `M0,100 C150,${(500 * yP) / 100} ${
        (500 * xP) / 100
      },0 500,100 L500,00 L0,0 Z`
    );
    wave2Ref.current.setAttribute(
      'd',
      `M0,100 C150,${(500 * yP) / 100} ${
        (500 * xP) / 100
      },0 500,100 L500,00 L0,0 Z`
    );
  }, [positions])

  return (
    <div  className={classes.background}>
      <svg
        className={classes.wave1}
        viewBox="0 0 500 500"
        preserveAspectRatio="xMinYMin meet"
      >
        <path
          ref={wave1Ref}
          d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 500 500"
        preserveAspectRatio="xMinYMin meet"
      >
        <linearGradient id="linear-gradient">
          <stop offset="0%" stopColor="#f4b673"/>
          <stop offset="100%" stopColor="#cdbff4"/>
        </linearGradient>
        <path
          ref={wave2Ref}
          d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
          fill="url(#linear-gradient)"
        ></path>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
