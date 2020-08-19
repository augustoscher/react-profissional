import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakAt, BreakpointSize } from './Breakpoints';

const collorYellow = '#ffc107';

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${props => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: '\\2713\\0020';
      color: ${collorYellow};
    }
  }
`;

const Hero = ({ image, children }) => (
  <Root image={image}>
    <Container>
      {/* <Title>{title}</Title> */}
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.protoTypes = {
  /**
   * Background image
   */
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
