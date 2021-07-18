import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = (props) => {
  const { onClick } = props;
  return <div onClick={onClick} className={classes.backdrop}></div>;
};

export default Backdrop;
