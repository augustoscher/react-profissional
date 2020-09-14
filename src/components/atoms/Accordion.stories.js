import React from 'react';
import Accordion from './Accordion';
import AccordionGroup from './AccordionGroup';

export default {
  title: 'Components/Atoms/Accordion',
  component: Accordion,
};

export const usage = () => (
  <Accordion title="Quais tipos e tamanhos de plataformas?">
    Cillum Lorem ex ex deserunt ea et Lorem adipisicing elit nostrud ullamco.
    Magna reprehenderit fugiat ea amet aliquip magna. Occaecat aliqua est qui
    enim consectetur do et. Culpa non id tempor enim incididunt.
  </Accordion>
);

export const withMoreItems = () => (
  <>
    <Accordion title="Quais tipos e tamanhos de plataformas?">
      Cillum Lorem ex ex deserunt ea et Lorem adipisicing elit nostrud ullamco.
      Magna reprehenderit fugiat ea amet aliquip magna. Occaecat aliqua est qui
      enim consectetur do et. Culpa non id tempor enim incididunt.
    </Accordion>
    <Accordion title="Quantas colheitadeiras são necessárias para minha lavoura?">
      Cillum Lorem ex ex deserunt ea et Lorem adipisicing elit nostrud ullamco.
      Magna reprehenderit fugiat ea amet aliquip magna. Occaecat aliqua est qui
      enim consectetur do et. Culpa non id tempor enim incididunt.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Quais tipos e tamanhos de plataformas?">
      Cillum Lorem ex ex deserunt ea et Lorem adipisicing elit nostrud ullamco.
      Magna reprehenderit fugiat ea amet aliquip magna. Occaecat aliqua est qui
      enim consectetur do et. Culpa non id tempor enim incididunt.
    </Accordion>
    <Accordion title="Quantas colheitadeiras são necessárias para minha lavoura?">
      Cillum Lorem ex ex deserunt ea et Lorem adipisicing elit nostrud ullamco.
      Magna reprehenderit fugiat ea amet aliquip magna. Occaecat aliqua est qui
      enim consectetur do et. Culpa non id tempor enim incididunt.
    </Accordion>
  </AccordionGroup>
);
