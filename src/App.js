import React from 'react';
import Hero from './components/molecules/Hero';
import BgSoyHarvestImage from './assets/soy-harvest.jpg';
import Heading from './components/atoms/Heading';
import Button from './components/atoms/Button';

import Grid from './components/atoms/Grid';
import Feature from './components/atoms/Feature';
import { FaCar, FaKey, FaProjectDiagram, FaMapMarkerAlt } from 'react-icons/fa';

import ThemeProvider from './styles/ThemeProvider';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
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
  </ThemeProvider>
);

export default App;
