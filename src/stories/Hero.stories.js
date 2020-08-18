import React from 'react';
import Hero from '../components/Hero';
import BgSoyHarvestImage from './assets/soy-harvest.jpg';
import BgFieldImage from './assets/field.jpg';

export default {
  title: 'Hero',
  component: Hero,
};

export const usage = () => (
  <Hero image={BgFieldImage} title="LRM Colheitas">
    <p>Oi</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgSoyHarvestImage} title="LRM Colheitas">
    <ul>
      <li>Lorem Ipsum</li>
      <li>Oiado lorem as</li>
      <li>Niasoa ein asles</li>
    </ul>
    <button>Entre em contato</button>
  </Hero>
);
