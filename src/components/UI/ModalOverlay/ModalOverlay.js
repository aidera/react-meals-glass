import React from 'react';

import classes from './ModalOverlay.module.scss';
import Card from '../Card/Card';

const ModalOverlay = (props) => {
  const { children, className } = props;
  return (
    <Card className={classes.modal + ' ' + className}>{children}</Card>
  );
};

export default ModalOverlay;
