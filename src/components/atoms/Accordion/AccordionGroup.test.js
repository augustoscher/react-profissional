import React from 'react';
import { render, screen, fireEvent } from 'test-utils';

import AccordionGroup from './AccordionGroup';
import Accordion from './Accordion';

const text = 'Text';
const title = 'Title';

const renderGroup = size => {
  const accordions = [...Array(size).keys()].map(i => {
    const id = i + 1;
    return (
      <Accordion key={id} title={`title${id}`}>
        Child {id}
      </Accordion>
    );
  });

  return render(<AccordionGroup>{accordions}</AccordionGroup>);
};

test('match snaphot', () => {
  const { asFragment } = render(
    <AccordionGroup>
      <Accordion open title={title}>
        {text}
      </Accordion>
    </AccordionGroup>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('renders with title', () => {
  render(
    <AccordionGroup>
      <Accordion title={title}></Accordion>
    </AccordionGroup>
  );

  expect(screen.getByText(title)).toBeInTheDocument();
});

test('renders with 3 children', () => {
  render(
    <AccordionGroup>
      <Accordion title={title}></Accordion>
      <Accordion title={title}></Accordion>
      <Accordion title={title}></Accordion>
    </AccordionGroup>
  );

  expect(screen.getAllByText(title)).toHaveLength(3);
});

// renderGroup

test('renders with all accordions closed', () => {
  renderGroup(3);

  expect(screen.queryByText('Child 0')).not.toBeInTheDocument();
  expect(screen.queryByText('Child 1')).not.toBeInTheDocument();
  expect(screen.queryByText('Child 2')).not.toBeInTheDocument();
});

test('opens accordion with click', async () => {
  renderGroup(5);

  await fireEvent.click(screen.getByText('title4'));
  expect(screen.queryByText('Child 0')).not.toBeInTheDocument();
  expect(screen.queryByText('Child 1')).not.toBeInTheDocument();
  expect(screen.queryByText('Child 2')).not.toBeInTheDocument();
  expect(screen.queryByText('Child 3')).not.toBeInTheDocument();
  expect(screen.queryByText('Child 4')).toBeInTheDocument();
});

test('closes accordion when it is open and it clicks on it', async () => {
  renderGroup(3);

  await fireEvent.click(screen.getByText('title1'));
  expect(screen.queryByText('Child 0')).not.toBeInTheDocument();
  expect(screen.queryByText('Child 1')).toBeInTheDocument();
  expect(screen.queryByText('Child 2')).not.toBeInTheDocument();

  await fireEvent.click(screen.getByText('title1'));

  expect(screen.queryByText('Child 0')).not.toBeInTheDocument();
  expect(screen.queryByText('Child 1')).not.toBeInTheDocument();
  expect(screen.queryByText('Child 2')).not.toBeInTheDocument();
});
