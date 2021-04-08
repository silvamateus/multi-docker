import React from 'react';
import { render } from '@testing-library/react';
import Fib from './Fib';

test('renders learn react link', () => {
  const fib = render(<Fib />);
  expect(Fib).toBeTruthy()
});
