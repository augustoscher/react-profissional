import React from 'react';
// import PropTypes from 'prop-types';

import Hero from '../molecules/Hero';
import BgSoyHarvestImage from '../../assets/soy-harvest.jpg';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Grid from '../atoms/Grid';
import Feature from '../atoms/Feature';
import Section from '../molecules/Section';
import { FaCar, FaKey, FaProjectDiagram, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => (
  <>
    <Hero image={BgSoyHarvestImage}>
      <Heading>
        <h1>
          <strong>TR</strong> Colheitas
          <br />e Transportes
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
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaKey />} title="Variada frota de colheitadeiras">
          <p>
            Temos variada frota de colheitadeiras. Nos ajustamos de acordo com
            sua necessidade de colheita.
          </p>
        </Feature>
        <Feature icon={<FaCar />} title="Transporte de implementos">
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
            transportes, plantio e colheitas de lavouras próprias e de
            terceiros.
          </p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
    </Section>
    <Section>
      <Heading>
        <h2>TR Tranportes e Colheitas</h2>
      </Heading>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
