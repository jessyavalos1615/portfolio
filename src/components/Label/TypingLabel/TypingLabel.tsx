import React from 'react';
import { TypingLabelProps } from '../LabelTypes';
import { BaseTypingLabel } from './Style';

const TypingLabel = ({ size, ...rest }: TypingLabelProps): JSX.Element => {
  return <BaseTypingLabel size={size} {...rest} />;
};

export default TypingLabel;
