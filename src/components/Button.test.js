import React from 'react';
import { render } from '../test-utils';
import Button from './Button';

test('renders text', () => {
  const { getByText } = render(<Button>Click here</Button>);

  expect(getByText('Click here')).toBeInTheDocument();
});
