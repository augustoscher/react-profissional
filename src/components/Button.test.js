import React from 'react';
import { render, fireEvent } from '../test-utils';
import Button, { ButtonColors, ButtonVariants } from './Button';

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

// [["primary"], ["default"], ["danger"]]
test.each(Object.values(ButtonColors).map(item => [item]))(
  'renders with color %s',
  color => {
    // testando com styled
    const { asFragment } = render(<Button color={color}>Click here</Button>);

    expect(asFragment()).toMatchSnapshot();
  }
);

test.each(Object.values(ButtonVariants).map(item => [item]))(
  'renders with variant %s',
  variant => {
    const { asFragment } = render(
      <Button variant={variant}>Click here</Button>
    );

    expect(asFragment()).toMatchSnapshot();
  }
);

test('renders with primary color and outlined variant', () => {
  const { asFragment } = render(
    <Button color="primary" variant="outlined">
      Click here
    </Button>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('renders with primary color and linked variant', () => {
  const { asFragment } = render(
    <Button color="primary" variant="linked">
      Click here
    </Button>
  );

  expect(asFragment()).toMatchSnapshot();
});
