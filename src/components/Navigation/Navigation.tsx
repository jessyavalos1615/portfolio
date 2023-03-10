import React from 'react';

import { NavigationContainer, NavText } from './Styles';

interface routesProps {
  path: string;
  text: string;
}

const Navigation = (): JSX.Element => {
  const routes: routesProps[] = [
    {
      path: '/',
      text: 'Jessy',
    },
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/experience',
      text: 'Experience',
    },
    {
      path: '/portfolio',
      text: 'Portfolio',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/contact',
      text: 'avalosbarralesjessy@gmail.com',
    },
  ];

  return (
    <NavigationContainer>
      {routes.map(({ path, text }: routesProps, index: number) => (
        <NavText key={index} to={path}>
          {text}
        </NavText>
      ))}
    </NavigationContainer>
  );
};

export default Navigation;
