import 'styled-components';

declare module 'styled-components' {
  export interface color {
    black: string;
    white: string;
    body_text: string;
    disabled: string;
    primaryColor: string;
    primaryColor_light: string;
    secondaryColor: string;
    secondaryColor_light: string;
  }

  export interface font {
    bold: string;
    medium: string;
    italic: string;
    light: string;
    thin: string;
    regular: string;
  }

  export interface font_size {
    x_small: string;
    small: string;
    medium: string;
    large: string;
    x_large: string;
  }

  export interface DefaultTheme {
    colors: color;
    fonts: font;
    font_sizes: font_size;
  }
}
