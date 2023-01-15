import React from 'react';

import { ButtonProps } from './ButtonTypes';
import { BaseButton } from './Style';

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return <BaseButton onClick={onClick}>{children}</BaseButton>;
};

export default Button;
