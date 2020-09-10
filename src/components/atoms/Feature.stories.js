import React from 'react';
import { FaCar, FaKey, FaProjectDiagram, FaMapMarkerAlt } from 'react-icons/fa';
import Feature from './Feature';
import Grid from './Grid';

export default {
  title: 'Components/Atoms/Feature',
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCar />} title="Título">
    <p>Textinho de teste</p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<FaKey />} title="Variada frota de colheitadeiras">
      <p>
        Temos variada frota de colheitadeiras. Nos ajustamos de acordo com sua
        necessidade de colheita.
      </p>
    </Feature>
    <Feature icon={<FaCar />} title="Transporte de implementos agrícolas">
      <p>
        Transportamos com agilidade e segurança seus implementos agrícolas,
        escavadeiras, caminhões entre outros.
      </p>
    </Feature>
    <Feature icon={<FaMapMarkerAlt />} title="Plantamos sua lavoura">
      <p>
        Contamos com todos os implementos necessários para plantio de sua
        lavoura.
      </p>
    </Feature>
    <Feature icon={<FaProjectDiagram />} title="Confiança e experiência">
      <p>
        Possuímos mais de 25 anos de experiência na prestação de serviços de
        transportes, plantio e colheitas de lavouras próprias e de terceiros.
      </p>
    </Feature>
  </Grid>
);
