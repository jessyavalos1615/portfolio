import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px 0;
`;

export const NavText = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: ${({theme}) => theme.font_sizes.small};
  font-stretch: 100%;
  line-height: 21px;

  color: ${({ theme }) => theme.colors.primaryColor};

  cursor: pointer;
  text-decoration: none;

  &:first-child {
    margin-right: auto;
  }

  &:last-child {
    margin-left: auto;
  }

  &.active:not(:first-child):not(:last-child) {
    color: ${({ theme }) => theme.colors.primaryColor_light};
    text-decoration: underline;
  }

  & .underline {
    text-decoration: underline;
  }
`;
