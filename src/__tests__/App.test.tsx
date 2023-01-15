import React from 'react';
import { test } from '@jest/globals';
import { render } from '@testing-library/react';
import App from '../App';

test('renders welcome message', () => {
  render(<App />);
});
