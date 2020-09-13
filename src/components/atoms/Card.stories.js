import React from 'react';
import Card, { CardBody, CardMedia } from './Card';
import Section from '../molecules/Section';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import CornHarvest from '../../stories/assets/corn-harvest.jpg';
import ValtraMachine from '../../stories/assets/valtra.jpg';

export default {
  title: 'Components/Atoms/Card',
  component: Card,
  subcomponents: { CardBody, CardMedia },
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

export const withImage = () => (
  <Section inverse>
    <Card>
      <CardMedia image={CornHarvest} />
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

export const withImage2 = () => (
  <Section inverse>
    <Card>
      <CardMedia image={ValtraMachine} />
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
