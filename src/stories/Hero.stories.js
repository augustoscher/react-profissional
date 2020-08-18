import React from 'react';
import Hero from '../components/Hero';
import BgSoyHarvestImage from './assets/soy-harvest.jpg';
import BgFieldImage from './assets/field.jpg';

export default {
  title: 'Hero',
  component: Hero,
};

export const usage = () => (
  <Hero image={BgFieldImage} title="A sua melhor escolha é ">
    <h1>
      Soluções de plantio e colheita <br />é na <strong>LLM</strong> Agricultura
    </h1>
    <p>Oi</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgSoyHarvestImage}>
    <h1>
      Soluções de plantio e colheita <br />é na <strong>LLM</strong> Agricultura
    </h1>
    <ul>
      <li>Serviço de colheita e plantio.</li>
      <li>Especializada em culturas como soja, milho e trigo.</li>
      <li>Serviço de transporte de implementos agrícolas.</li>
    </ul>
    <button>Entre em contato</button>
  </Hero>
);
