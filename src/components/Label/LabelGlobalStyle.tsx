import { color, css, font_size } from 'styled-components';

import { BaseLabelProps, LabelSize } from './LabelTypes';

type LabelFontSize = {
  [key in LabelSize]: keyof font_size;
};

type LabelLineHeight = {
  [key in LabelSize]: string;
};

type LabelColor = {
  [key in LabelSize]: keyof color;
};

export const LabelGlobalStyle = css<BaseLabelProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  font-stretch: 100%;

  font-size: ${({ theme, size }) => theme.font_sizes[fontSize[size]]};
  line-height: ${({ size }) => lineHeight[size]};
  color: ${({ theme, size }) => theme.colors[labelColor[size]]};
`;

const fontSize: LabelFontSize = {
  xsmalllabel: 'x_small',
  smalllabel: 'small',
  mediumlabel: 'medium',
  largelabel: 'large',
  xlargelabel: 'x_large',
};

const lineHeight: LabelLineHeight = {
  xsmalllabel: '16px',
  smalllabel: '21px',
  mediumlabel: '28px',
  largelabel: '30px',
  xlargelabel: '80px',
};

const labelColor: LabelColor = {
  xsmalllabel: 'secondaryColor',
  smalllabel: 'body_text',
  mediumlabel: 'primaryColor_light',
  largelabel: 'primaryColor',
  xlargelabel: 'primaryColor',
};
