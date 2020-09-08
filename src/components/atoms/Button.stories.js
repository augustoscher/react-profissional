import React from 'react';
import { actions } from '@storybook/addon-actions';
import Button from './Button';
import styled from 'styled-components';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const events = actions({ onClick: 'clicked' });

// & > * todos os filhos
const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <div>
      <p>Enabled:</p>
      <Toolbar>
        <Button {...events}>Default</Button>
        <Button color="primary" {...events}>
          Primary
        </Button>
        <Button color="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </div>
    <div>
      <p>Disabled:</p>
      <Toolbar>
        <Button disabled {...events}>
          Default
        </Button>
        <Button disabled color="primary" {...events}>
          Primary
        </Button>
        <Button disabled color="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </div>
  </div>
);

export const outlined = () => (
  <div>
    <div>
      <p>Enabled:</p>
      <Toolbar>
        <Button variant="outlined" {...events}>
          Default
        </Button>
        <Button variant="outlined" color="primary" {...events}>
          Primary
        </Button>
        <Button variant="outlined" color="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </div>
    <div>
      <p>Disabled:</p>
      <Toolbar>
        <Button variant="outlined" disabled {...events}>
          Default
        </Button>
        <Button variant="outlined" disabled color="primary" {...events}>
          Primary
        </Button>
        <Button variant="outlined" disabled color="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </div>
  </div>
);

export const linked = () => (
  <div>
    <div>
      <p>Enabled:</p>
      <Toolbar>
        <Button variant="linked" {...events}>
          Default
        </Button>
        <Button variant="linked" color="primary" {...events}>
          Primary
        </Button>
        <Button variant="linked" color="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </div>
    <div>
      <p>Disabled:</p>
      <Toolbar>
        <Button variant="linked" disabled {...events}>
          Default
        </Button>
        <Button variant="linked" disabled color="primary" {...events}>
          Primary
        </Button>
        <Button variant="linked" disabled color="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </div>
  </div>
);
