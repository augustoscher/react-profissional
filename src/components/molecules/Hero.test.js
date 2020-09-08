import React from 'react';
import { render } from '../../test-utils';
import Hero from './Hero';

// best practice is look at component proptypes
// to know if we're testing all component behavior.

test('renders Hero with children', () => {
  const { getByText } = render(
    <Hero>
      <p>Oi</p>
    </Hero>
  );

  expect(getByText('Oi')).toBeInTheDocument();
});

test('renders background image', () => {
  const image = 'http://test/test.jpg';

  const { getByTestId } = render(<Hero image={image} />);

  //jest-styled-components package
  expect(getByTestId('hero')).toHaveStyleRule({
    backgroundImage: image,
  });
});
