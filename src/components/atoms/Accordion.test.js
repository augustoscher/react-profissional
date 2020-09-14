import React from 'react';
import { render, screen, fireEvent } from 'test-utils';

import Accordion from './Accordion';

test('match snapshot', () => {
  const { asFragment } = render(<Accordion title="Title">xunda</Accordion>);

  expect(asFragment()).toMatchSnapshot();
});

test('renders the title', () => {
  const title = 'My Title';
  render(<Accordion title={title}></Accordion>);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test('renders without children', () => {
  const text = 'xunda';
  render(<Accordion title="Test">{text}</Accordion>);

  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test('trigger on change when is clicked', async () => {
  const title = 'My Title';
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange}></Accordion>);
  await fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalledTimes(1);
});
