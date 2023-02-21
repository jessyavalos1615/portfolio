import React from 'react';

import { BaseButton } from './Style';
import { ButtonProps } from './ButtonTypes';

const Button = ({
  variant,
  children,
  onClick,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <BaseButton variant={variant} onClick={onClick} {...rest}>
      {children}
    </BaseButton>
  );
};

export default Button;
