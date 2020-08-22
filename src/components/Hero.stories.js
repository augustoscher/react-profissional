import React from 'react';
import { text } from '@storybook/addon-knobs';

import Hero from './Hero';
import BgSoyHarvestImage from '../stories/assets/soy-harvest.jpg';
import BgFieldImage from '../stories/assets/field.jpg';
import Heading from './Heading';
import Button from './Button';

export default {
  title: 'Components/Hero',
  component: Hero,
};

export const usage = () => (
  <Hero image={BgFieldImage} title="A sua melhor escolha é ">
    <Heading>
      <h1>
        {text('Title', 'Soluções de plantio e colheita é na LLM Agricultura')}
      </h1>
    </Heading>
    <p>
      {text('Text', 'Serviço de preparação de terreno, colheita e plantio.')}
    </p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgSoyHarvestImage}>
    <Heading>
      <h1>
        Soluções de plantio e colheita <br />é na <strong>LLM</strong>{' '}
        Agricultura
      </h1>
    </Heading>
    <ul>
      <li>Serviço de preparação de terreno, colheita e plantio.</li>
      <li>Especializada em culturas como soja, trigo e milho.</li>
      <li>Serviço de transportes gerais e de implementos agrícolas.</li>
    </ul>
    <Button color="primary" variant="outlined">
      Entre em contato
    </Button>
  </Hero>
);

export const withCompanyTitle = () => (
  <Hero image={BgSoyHarvestImage}>
    <Heading>
      <h1>
        <strong>TR</strong> Transportes
        <br />e Colheitas
      </h1>
    </Heading>
    <ul>
      <li>Serviço de preparação de terreno, colheita e plantio.</li>
      <li>Especializada em culturas como soja, trigo e milho.</li>
      <li>Serviço de transportes gerais e de implementos agrícolas.</li>
    </ul>
    <Button color="primary" variant="outlined">
      Entre em contato
    </Button>
  </Hero>
);
