import React from 'react';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const usage = () => (
  <>
    <Heading>
      <h1>Title 1</h1>
    </Heading>
    <Heading>
      <h2>Title 2</h2>
    </Heading>
    <Heading>
      <h3>Title 3</h3>
    </Heading>
    <Heading>
      <h4>Title 4</h4>
    </Heading>
    <Heading>
      <h5>Title 5</h5>
    </Heading>
    <Heading>
      <h6>Title 6</h6>
    </Heading>
  </>
);
