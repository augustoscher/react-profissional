import React from 'react';
import { render, screen, fireEvent } from 'test-utils';

import Accordion from './Accordion';

const text = 'Xunda';
const title = 'Title';

test('match snapshot', () => {
  const { asFragment } = render(<Accordion title="Title">xunda</Accordion>);

  expect(asFragment()).toMatchSnapshot();
});

test('renders with title', () => {
  render(<Accordion title={title}></Accordion>);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test('renders without children', () => {
  render(<Accordion title={title}>{text}</Accordion>);

  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test('trigger on change when is clicked', async () => {
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange}></Accordion>);
  await fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalledTimes(1);
});

describe('When is controlled', () => {
  describe('When starts opened', () => {
    test('renders whith children', () => {
      render(
        <Accordion open title={title}>
          {text}
        </Accordion>
      );

      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test('hide children on click', () => {
      const { rerender } = render(
        <Accordion open title={title}>
          {text}
        </Accordion>
      );

      rerender(
        <Accordion open={false} title={title}>
          {text}
        </Accordion>
      );

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });

  describe('When starts closed', () => {
    test('renders whithout children', () => {
      render(
        <Accordion open={false} title={title}>
          {text}
        </Accordion>
      );

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
