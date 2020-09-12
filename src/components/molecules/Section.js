import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Container from '../atoms/Container';

const Content = styled.div`
  padding: 40px 0;

  ${props =>
    props.inverse &&
    css`
      background-color: #f7f7f7;
    `}
`;

const Section = ({ inverse, children }) => (
  <Content inverse={inverse}>
    <Container>{children}</Container>
  </Content>
);

Section.defaultProps = {
  children: undefined,
  inverse: false,
};

Section.propTypes = {
  children: PropTypes.node,
  inverse: PropTypes.bool,
};

export default Section;
