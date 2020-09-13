import React from 'react';
import { render, screen, fireEvent } from 'test-utils';

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

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
])('with %i products', (size, showOnly) => {
  test(`should render ${showOnly} product(s)`, () => {
    render(<ProductGrid products={buildProducts(size)} />);

    expect(screen.getAllByRole('heading').length).toEqual(showOnly);
  });

  test('show all products when button is clicked', async () => {
    render(<ProductGrid products={buildProducts(size)} />);

    await fireEvent.click(screen.getByText('Lista completa de serviços'));
    expect(screen.getAllByRole('heading').length).toEqual(size);
  });
});
