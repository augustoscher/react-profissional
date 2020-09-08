import React from 'react';
import { FaCar } from 'react-icons/fa';
import Feature from './Feature';

export default {
  title: 'Components/Atoms/Feature',
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCar />} title="Teste">
    Mais testes
  </Feature>
);
