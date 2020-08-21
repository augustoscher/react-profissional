import React from 'react';
import Button from './Button';
import styled from 'styled-components';

export default {
  title: 'Components/Button',
  component: Button,
};

// & > * todos os filhos
const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <Toolbar>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="danger">Danger</Button>
  </Toolbar>
);
