import React from 'react';

import { BaseLabel } from './Style';
import { LabelProps } from './LabelTypes';

const Label = ({ size, text, style, ...rest }: LabelProps): JSX.Element => {
  return (
    <BaseLabel size={size} style={style} {...rest}>
      {text}
    </BaseLabel>
  );
};

export default Label;
