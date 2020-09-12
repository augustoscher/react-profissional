import React from 'react';
import Card, { CardBody } from './Card';
import Section from '../molecules/Section';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

export default {
  title: 'Components/Atoms/Card',
  component: Card,
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Colheitas</h6>
        </Heading>
        <p>Nostrud nisi veniam do veniam ea sunt ipsum do.</p>
        <div>
          <Button variant="link" color="primary">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);
