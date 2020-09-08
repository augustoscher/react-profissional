import React from 'react';
import { text } from '@storybook/addon-knobs';

import Heading from './Heading';

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
};

export const usage = () => (
  <>
    <Heading>
      <h1>{text('title 1', 'Titulo 1')}</h1>
    </Heading>
    <Heading>
      <h2>{text('title 2', 'Titulo 2')}</h2>
    </Heading>
    <Heading>
      <h3>{text('title 3', 'Titulo 3')}</h3>
    </Heading>
    <Heading>
      <h4>{text('title 4', 'Titulo 4')}</h4>
    </Heading>
    <Heading>
      <h5>{text('title 5', 'Titulo 5')}</h5>
    </Heading>
    <Heading>
      <h6>Title 6</h6>
      <h6>{text('title 6', 'Titulo 6')}</h6>
    </Heading>
  </>
);
