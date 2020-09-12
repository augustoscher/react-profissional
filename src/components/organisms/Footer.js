import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaBuilding, FaFacebookF, FaInstagram } from 'react-icons/fa';

import Container from '../atoms/Container';
import Grid from '../atoms/Grid';
import Heading from '../atoms/Heading';

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>TR Colheitas e Transportes</h6>
          </Heading>
          <p>
            Commodo cupidatat occaecat eu anim esse officia. Qui in id quis ut
            ullamco adipisicing adipisicing sunt.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (55) 3353-65435
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Avenida Independência, S/N, Salvador das Missões, RS
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <p>
            <FooterLink target="_blank" href="">
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="">
              <IconContainer>
                <FaInstagram />
              </IconContainer>
              Instagram
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
