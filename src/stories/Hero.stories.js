import React from 'react';
import Hero from '../components/Hero';

export default {
  title: 'Hero',
  component: Hero,
};

export const usage = () => (
  <Hero title="LRM Colheitas">
    <p>Oi</p>
  </Hero>
);

export const withList = () => (
  <Hero title="LRM Colheitas">
    <ul>
      <li>Lorem Ipsum</li>
      <li>Oiado lorem as</li>
      <li>Niasoa ein asles</li>
    </ul>
    <button>Entre em contato</button>
  </Hero>
);
