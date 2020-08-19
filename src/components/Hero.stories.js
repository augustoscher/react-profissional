import React from 'react';
import Hero from './Hero';
import BgSoyHarvestImage from '../stories/assets/soy-harvest.jpg';
import BgFieldImage from '../stories/assets/field.jpg';
import Heading from './Heading';

export default {
  title: 'Components/Hero',
  component: Hero,
};

export const usage = () => (
  <Hero image={BgFieldImage} title="A sua melhor escolha é ">
    <Heading>
      <h1>
        Soluções de plantio e colheita <br />é na <strong>LLM</strong>{' '}
        Agricultura
      </h1>
    </Heading>
    <p>Oi</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgSoyHarvestImage}>
    <Heading>
      <h1>
        Soluções de plantio e colheita <br />é na <strong>TR</strong>{' '}
        Agricultura
      </h1>
    </Heading>
    <ul>
      <li>Serviço de preparação de terreno, colheita e plantio.</li>
      <li>Especializada em culturas como soja, trigo e milho.</li>
      <li>Serviço de transportes gerais e de implementos agrícolas.</li>
    </ul>
    <button>Entre em contato</button>
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
    <button>Entre em contato</button>
  </Hero>
);
