import React from 'react';
import { render } from 'test-utils';
import { FaCar } from 'react-icons/fa';

import Feature from './Feature';

test('renders the title', () => {
  const { asFragment } = render(
    <Feature icon={<FaCar />} title="Título">
      <p>Textinho de teste</p>
    </Feature>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('renders the title', () => {
  const title = 'My Title';
  const { getByText } = render(<Feature title={title} />);

  expect(getByText(title)).toBeInTheDocument();
});

test('renders children', () => {
  const { getByText } = render(<Feature>Children</Feature>);

  expect(getByText('Children')).toBeInTheDocument();
});
