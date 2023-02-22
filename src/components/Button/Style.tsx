import styled, { color } from 'styled-components';
import { BaseButtonProps, ButtonVariant } from './ButtonTypes';

type ButtonColors = {
  [key in ButtonVariant]: keyof color;
};

const setCursor = ({ variant }: any): string => variant === ButtonVariant.inactive ? 'default' : 'pointer';

const setOpacity = ({ variant }: any): string => variant === ButtonVariant.inactive ? '0.5' : '1';

export const BaseButton = styled.button<BaseButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 248px;
  width: 100%;
  height: 49px;

  border-width: 0;
  border-radius: 50px;

  background-color: ${({ theme, variant }) =>
    theme.colors[backgroundColor[variant]]};
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.font_sizes.small};
  text-align: center;

  cursor: ${setCursor};
  opacity: ${setOpacity};
`;

const backgroundColor: ButtonColors = {
  default: 'primaryColor',
  secondary: 'secondaryColor',
  inactive: 'disabled',
};
