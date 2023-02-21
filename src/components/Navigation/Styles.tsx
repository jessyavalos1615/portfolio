import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px 0;
`;

export const NavText = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
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

  & .underline {
    text-decoration: underline;
  }
`;
