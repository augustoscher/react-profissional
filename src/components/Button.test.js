import React from 'react';
import { render, fireEvent } from '../test-utils';
import Button from './Button';

test('renders text', () => {
  const { getByText } = render(<Button>Click here</Button>);

  expect(getByText('Click here')).toBeInTheDocument();
});

test('triggers event on click', () => {
  const handleClick = jest.fn();

  const { getByRole } = render(<Button onClick={handleClick} />);
  fireEvent.click(getByRole('button'));

  expect(handleClick).toBeCalled();
});
