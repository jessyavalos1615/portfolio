import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    body_text: '#777990',
    disabled: '#749DAB',
    primaryColor: '#37545E',
    primaryColor_light: '#5295AB',
    secondaryColor: '#5E4B37',
    secondaryColor_light: '#AB7641',
  },
  fonts: {
    bold: 'Roboto-Bold',
    medium: 'Roboto-Medium',
    italic: 'Roboto-Italic',
    light: 'Roboto-Light',
    thin: 'Roboto-Thin',
    regular: 'Roboto-Regular',
  },
  font_sizes: {
    x_small: '0.75rem',
    small: '1.125rem',
    medium: '2rem',
    large: '3rem',
    x_large: '4.25rem',
  },
};

/*
10px = 0.625rem
12px = 0.75rem
14px = 0.875rem
16px = 1rem (base)
18px = 1.125rem
20px = 1.25rem
24px = 1.5rem
30px = 1.875rem
32px = 2rem
40px = 2.5rem
48px = 3rem
56px = 3.5rem
64px = 4rem
68px = 4.25rem
*/

export default theme;
