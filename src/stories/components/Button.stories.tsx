import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import theme from '../../theme/Theme';
import Button from '../../components/Button/Button';
import { ButtonVariant } from '../../components/Button/ButtonTypes';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: ButtonVariant.default,
  children: 'Test',
};
