import React from 'react';
import { render, screen } from 'test-utils';

import ProductGrid from './ProductGrid';

const buildProducts = size => {
  return [...Array(size).keys()].map(i => {
    const id = i + 1;
    return {
      id,
      title: `title${id}`,
      image: `image${id}`,
      summary: `summary${id}`,
    };
  });
};

test('match snapshot', () => {
  const { asFragment } = render(<ProductGrid products={buildProducts(6)} />);

  expect(asFragment()).toMatchSnapshot();
});

test.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
])('with %i products should render %i product(s)', (size, expected) => {
  render(<ProductGrid products={buildProducts(size)} />);

  expect(screen.getAllByRole('heading').length).toEqual(expected);
});
