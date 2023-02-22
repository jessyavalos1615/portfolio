import React from 'react';

import { BaseButton } from './Style';
import { ButtonProps, ButtonVariant } from './ButtonTypes';

const Button = ({ variant, children, onClick }: ButtonProps): JSX.Element => {
  const isDisabled = variant === ButtonVariant.inactive;
  return (
    <BaseButton variant={variant} onClick={onClick} disabled={isDisabled}>
      {children}
    </BaseButton>
  );
};

export default Button;
